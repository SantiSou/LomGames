# -*- coding: UTF-8 -*-
import random
import string

def tirarDado(ins,dic):
    n = int(ins.split("d")[0])
    caras = int(ins.split("d")[1])
    for i in range(1,n+1):
        tirada = random.randint(1,caras)
        dic[str(i)+"d"+str(caras)] = tirada
    return dic


def sumDices(instrucciones):
    lista = []
    dic = {}
    for elemento in instrucciones:
        cantidad = int(elemento.split("d")[0])
        caras = int(elemento.split("d")[1])
        if caras not in dic.keys():
            dic[caras] = cantidad
        else:
            dic[caras]+=cantidad
    for key in dic:
        lista.append(str(dic[key])+"d"+str(key))
    return lista

def flipCoin(n):
	lista = []
	for n in range(1, n+1):
		valor = random.randint(1, 2)
		opcion = int(valor)
		if opcion == 1:
			lista.append("True")
		else:
			lista.append("False")
	return lista

def getRandomString(length):
    letters = string.ascii_letters
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str