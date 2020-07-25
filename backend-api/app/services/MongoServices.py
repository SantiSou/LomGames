import pymongo
import configs


def saveDocument(document, collection_name):
    db = getDatabase(configs.DATABASE_NAME)
    collection = db[collection_name]
    return collection.insert_one(document)


def saveDocumentDB(document, db, deleteQuery):
    if deleteQuery:
        db.delete_one(deleteQuery)
    db.insert_one(document)


def saveDocumentsDB(documents, db):
    db.insert_many(documents)

def clearAndSaveBatchDocumentsDB(documents,db):
    db.delete_many({})
    db.insert_many(documents)

def saveDocuments(documents, collection_name):
    if len(documents) is not 0:
        db = getDatabase(configs.DATABASE_NAME)
        collection = db[collection_name]
        collection.insert_many(documents)


def getDocument(query, collection_name):
    db = getDatabase(configs.DATABASE_NAME)
    collection = db[collection_name]
    result = collection.find_one(query)
    if result:
        del result["_id"]
    return result

def getDocuments(query, collection_name, limit = 30):
    db = getDatabase(configs.DATABASE_NAME)
    collection = db[collection_name]
    results = list(collection.find(query).limit(limit))
    for result in results:
        del result["_id"]
    return results


def getDatabase(database_name):
    conn = configs.MONGO_URI

    client = pymongo.MongoClient(conn)

    return client.get_database(database_name)


def documentExists(query, collection_name):
    db = getDatabase(configs.DATABASE_NAME)
    collection = db[collection_name]
    result = collection.find_one(query)
    return result != None


def upsertDocument(document, collection_name, key):
    db = getDatabase(configs.DATABASE_NAME)
    collection = db[collection_name]
    collection.update_one(key, {"$set": document}, upsert=True)

def deleteDocuments(document_key, collection_name):
    db = getDatabase(configs.DATABASE_NAME)
    collection = db[collection_name]
    collection.delete_many(document_key)
