from numpy import append
from bs4 import BeautifulSoup as b4 ,SoupStrainer as s4
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import requests
import io
import time
from asyncore import write
import csv
from itertools import count
import re
import json

pattern = re.compile('⚡|🚚|❗|🔥|🥇|✅|🧀|❥|⭐|🌀')
pattern2 = re.compile('💯')

def Get_data_realtime(url):

    options = webdriver.ChromeOptions()
    options.add_argument('--headless')

    browser = webdriver.Chrome(options=options, executable_path=r'chromedriver.exe')
    browser.get(url)
    browser.fullscreen_window()

    html = browser.page_source
    soup = b4(html,features="html.parser")
    # find_name = soup.find_all('div',{'class':'RfADt'})
    find_price = soup.find_all('div',{'class':'aBrP0'})
    find_img = soup.find_all('div',{'class':'picture-wrapper'})
    browser.quit()
    # print(find_img)
    item = []
    price = []
    img =[]
    get_txt_to_json = []
    lit = []
    # print(find_name.img['title'],find_img.img['src'])
    # with open("ITEM_REALTIME2.csv","w",newline="",encoding='utf-8') as f:
    with open("flash_sale2.json","w",encoding='utf-8') as f  :
        for j in range(0,100):
            try:
                clean_name = re.sub(pattern,' ',find_img[j].img['alt'])
                clean_name = re.sub(pattern2,'100',clean_name)
                # fw.writerow([clean_name,find_price[j].span.get_text(strip=True),find_img[j].img['src'],'มาแรง'])
                # item.append(clean_name)
                # price.append(find_price[j].span.get_text(strip=True))
                # img.append(find_img[j].img['src'])
                get_txt_to_json = {
                                "name":clean_name,
                                "price":find_price[j].span.get_text(strip=True),
                                "img":[find_img[j].img['src']],
                                "category":["flash sale"]
                            }
                lit.append(get_txt_to_json)   
                # f.write(json.dumps(get_txt_to_json,indent=4,ensure_ascii=False))
            except:
                pass
        # get_txt_to_json = {
        #                         "item":item,
        #                         "price":price,
        #                         "img":img
        #                     }     
        f.write(json.dumps(lit,indent=4,ensure_ascii=False))


while(True):
    Get_data_realtime('https://www.lazada.co.th/tag/top-selling/')
    print('END')
    time.sleep(60)