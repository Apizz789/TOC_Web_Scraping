from numpy import append
import requests
from bs4 import BeautifulSoup as b4 ,SoupStrainer as s4
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import requests
import io
import time
from asyncore import write
import csv
from itertools import count
from WebClass_Scraping import Lazada
from Get_Datalink import url_general_lazada


with open("LAZADA.csv","w",newline="",encoding='utf-8') as f:
    fw = csv.writer(f)
    fw.writerow(['ชื่อร้าน','ชื่อสินค้า','ราคา','รูปภาพ','หมวดหมู่'])
    
    for i in range(0,len(url_general_lazada)):
        # if(i==2):break
        try:
            l = Lazada(url_general_lazada[i])
            vari = l.getData()
            print(vari)
            fw.writerow([vari[0],vari[1],vari[2],vari[3],vari[4]])
        except:
            pass