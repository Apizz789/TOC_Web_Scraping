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
import re

pattern = re.compile('⚡|🚚|❗|🔥|🥇|✅|🧀|❥|⭐')
pattern2 = re.compile('💯')

def Get_data_realtime(url):

    options = webdriver.ChromeOptions()
    options.add_argument('--headless')

    browser = webdriver.Chrome(options=options, executable_path=r'chromedriver.exe')
    browser.get(url)
    browser.fullscreen_window

    html = browser.page_source
    soup = b4(html,features="html.parser")
    find_name = soup.find_all('div',{'class':'RfADt'})[:6] 
    find_price = soup.find_all('div',{'class':'aBrP0'})[:6]
    find_img = soup.find_all('div',{'class':'picture-wrapper'})[:6]
    browser.quit()
    # print(find_img)
    with open("ITEM_REALTIME.csv","w",newline="",encoding='utf-8') as f:
        fw = csv.writer(f)
        fw.writerow(['ชื่อสินค้า','ราคา','รูปภาพ','หมวดหมู่'])
        for j in range(0,6):
            try:
                clean_name = re.sub(pattern,' ',find_name[j].a.get_text(strip=True))
                clean_name = re.sub(pattern2,'100',clean_name)
                fw.writerow([clean_name,find_price[j].span.get_text(strip=True),find_img[j].img['src'],'มาแรง'])
            except:
                pass





Get_data_realtime('https://www.lazada.co.th/tag/%E0%B8%81%E0%B8%B3%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%A1%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%87/')


# for k in range(0,len(link_realtime)):
#     link_realtime[k] = link_realtime[k].replace('//','https://')
# print(link_realtime)
# # real_data = Get_data_realtime(link_realtime[0])
# # print(real_data)
# with open("ITEM_REALTIME4.csv","w",newline="",encoding='utf-8') as f:
#     fw = csv.writer(f)
#     fw.writerow(['ชื่อร้าน','ชื่อสินค้า','ราคา','รูปภาพ','หมวดหมู่'])
#     for j in link_realtime:
#         try:
#             l = Lazada(j)
#             real = l.getData()
#             print(real)
#             fw.writerow([real[0],real[1],real[2],real[3],real[4]])
#         except:
#             pass












# options = webdriver.ChromeOptions()
# options.add_argument('--headless')
# browser = webdriver.Chrome(options=options, executable_path=r'chromedriver.exe')




# url = "https://www.lazada.co.th/tag/%E0%B8%81%E0%B8%B3%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%A1%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%87/"
# browser.get(url)