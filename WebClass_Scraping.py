from itertools import count
from time import sleep, time
from bs4 import BeautifulSoup as b4 , SoupStrainer as s4
# from Get_Datalink import url_general_lazada
from selenium import webdriver
import requests
import io
import time
from asyncore import write
import csv

class Lazada:
    def __init__(self,url):
        self.url = url
        self.web_data = None
        self.soup = None
        self.soup2 = None
        self.soup3 = None
        self.find_word = None
        self.price = None
        self.img = None
        self.tag = None
        self.all_tag = []
        self.stri= []
        self.seller = None
        self.html = None
        self.requests()

    def requests(self):
        # headers = ['User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 
        # (KHTML, like Gecko) Chrome/41.0.2272.0 Safari/537.36']
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        browser = webdriver.Chrome(options=options, executable_path=r'chromedriver.exe')
        self.web_data = browser.get(self.url)
        self.html = browser.page_source
        time.sleep(3)
        self.pull()
    
    def pull(self):
        self.soup = b4(self.html,features="html.parser")
        self.soup2 = b4(self.html,features="html.parser",parse_only=s4('img'))
        self.soup3 = b4(self.html,features="html.parser")
        time.sleep(1)
        self.findtag()

    def findtag(self):
        self.find_word = self.soup.find_all('h1',{'class','pdp-mod-product-badge-title'})
        # time.sleep(1)
        self.price = self.soup.find_all('span',{'class':'pdp-price pdp-price_type_normal pdp-price_color_orange pdp-price_size_xl'})
        # time.sleep(1)
        self.img = self.soup2.find_all('img',{'class':'pdp-mod-common-image gallery-preview-panel__image'})
        # time.sleep(1)
        self.tag = self.soup3.find_all("a",{'class':'breadcrumb_item_anchor'})
        # time.sleep(1)
        self.seller = self.soup.find_all("a",{"class":"pdp-link pdp-link_size_l pdp-link_theme_black seller-name__detail-name"})
        # time.sleep(1)
    def getData(self):
        for i in self.tag:
            self.all_tag.append(i.get_text(strip=True))
        self.stri.append(self.seller[0].get_text(strip=True))
        self.stri.append(self.find_word[0].get_text(strip=True))
        self.stri.append(self.price[0].get_text(strip=True))
        self.stri.append(self.img[0]['src'])
        self.stri.append(self.all_tag[:])
        return self.stri


class Ebay:
    def __init__(self,url):
        self.url = url
        self.web_data = None
        self.soup = None
        self.soup2 = None
        self.soup3 = None
        self.find_word = None
        self.price = None
        self.register = None
        self.img = None
        self.price_tag = ''
        self.real_price = ''
        self.all_tag = []
        self.stri= []
        self.seller = None
        self.tag = None
        self.requests()
    
    def requests(self):
        self.web_data = requests.get(self.url)
        self.pull()
    
    def pull(self):
        self.soup = b4(self.web_data.text,'html.parser')
        self.soup2 = b4(self.web_data.text,'lxml',parse_only=s4('img'))
        self.soup3 = b4(self.web_data.text,'html.parser')
        self.findtag()

    def findtag(self):
        self.find_word = self.soup.find_all('span',{'class','u-dspn'})
        self.price = self.soup.find_all('div',{'class':'mainPrice'})[0]
        self.img = self.soup2.find_all('img',{'class':'img img300'})
        self.tag = self.soup3.find_all("a",{"class":"scnd"})
        self.seller = self.soup.find_all("span",{"class":"ux-textspans ux-textspans--PSEUDOLINK ux-textspans--BOLD"})
        
    def getData(self):
        # print(find_word[0].get_text(strip=True))
        self.register = b4(self.price.text,'html.parser')   
        for i in self.register:
            self.price_tag += i
        for j in self.tag:
            self.all_tag.append(j.get_text(strip=True))
        self.price_tag = self.price_tag.split('\n')
        self.real_price = self.price_tag[8].replace('Approximately ','').replace('(including shipping)','')
        self.stri.append(self.seller[0].get_text(strip=True))
        self.stri.append(self.find_word[0].get_text(strip=True))
        self.stri.append(self.real_price)
        self.stri.append(self.img[0]['src'])
        self.stri.append(self.all_tag)
        return self.stri


class Weloveshop:
    def __init__(self,url):
        self.url = url
        self.web_data = None
        self.soup = None
        self.soup2 = None
        self.find_word = None
        self.price = None
        self.img = None
        self.all_tag = []
        self.stri= []
        self.seller = None
        self.requests()

    def requests(self):
        self.web_data = requests.get(self.url)
        self.pull()
    
    def pull(self):
        self.soup = b4(self.web_data.text,'html.parser')
        self.soup2 = b4(self.web_data.text,'lxml',parse_only=s4('img'))
        self.soup3 = b4(self.web_data.text,'html.parser')
        self.findtag()

    def findtag(self):
        self.find_word = self.soup.find('h1')
        self.price = self.soup.find_all('strong',{'class':'font-34px color-main'})
        self.img = self.soup2.find_all('img',{'class':'active'})
        self.tag = self.soup3.find_all("a",{"class":"active"})
        self.seller = self.soup.find_all("div",{"class":"shop-detail"})[0].span.get_text(strip=True)
    
    def getData(self):
        for j in self.tag:
            self.all_tag.append(j.get_text(strip=True))
        self.stri.append(self.seller)
        self.stri.append(self.find_word.get_text(strip=True))
        self.stri.append(self.price[0].get_text(strip=True)+' บาท')
        self.stri.append(self.img[0]['src'])
        self.stri.append(self.all_tag)
        return self.stri


url_general_lazada = [
    'https://www.lazada.co.th/products/0-oppo-a16-4gb64gb-652-hd-5000-mah-3-13-mp-1-i2763755607-s10043812076.html',
    'https://www.lazada.co.th/products/redmi-note-11-6128gb-643-amoled-full-hd-android-11-5000mah-33w-15-7-i3356700202-s12453745905.html',
    'https://www.lazada.co.th/products/oppo-a83-100-ram-4gb-rom-64gb-1-i1999372621-s11118374757.html',
    'https://www.lazada.co.th/products/realme-c35-464-5000-mah-50mp-ai-3-lens-1-i3397205553-s12555555255.html',
    'https://www.lazada.co.th/products/samsung-galaxy-a03-1-i3320319954-s13542512449.html',
    'https://www.lazada.co.th/products/vivo-y31-netcom-4g-1-47-i2485811713-s8760860424.html',
    'https://www.lazada.co.th/products/1-alldocube-iplay-40h-8gb-ram-128gb-rom-android-11-2000x1200-fhd-104-unisoc-t618-dual-4g-lte-dual-band-wi-fi-6200mah-i1498484539-s3954296327.html',
    'https://www.lazada.co.th/products/tablet-7-wifi32gb-lenovo-tab-m7-tb-7306f-iron-gray-i2826902686-s10310360096.html',
    'https://www.lazada.co.th/products/xiaomi-pad-5-mi-pad-5-11wqhd-120hz-snapdragon-860-8720mah-15-i2794655469-s10365360980.html',
    'https://www.lazada.co.th/products/samsung-galaxy-tab-s6-lite-wifi-lte-i2236467427-s7480312061.html',
    'https://www.lazada.co.th/products/100-tablet-tab-8-4gb-ram-64gb-rom-android100-101-6580mah-blackview-i3106761961-s11495486144.html',
    'https://www.lazada.co.th/products/0-10huawei-matebook-d15-bohrb-wai9aqintel-core-i3-10110u-1-y-by-top-computer-i2730079045-s9893554020.html',
    'https://www.lazada.co.th/products/hp-pavilion-r5-5500u16gb512gbamd-radeon156fhdw10ms-office2y-onsite-15-eh1082au-4d2d4paakl-notebook-i2896152434-s10581784917.html',
    'https://www.lazada.co.th/products/bmax-maxbook-y13-2-in-1-laptop-360-yoga-133-multi-touch-ultrabook-windows-10-pro-intel-celeron-quad-core-8gb-ram-256gb-ssd-i1493976823-s3939560243.html',
    'https://www.lazada.co.th/products/i7j4125-156-i7-6560u-30ghz-ddr4-ram-16g-ssd-512g-14j3455-windows10-i2398518869-s12300018359.html',
    'https://www.lazada.co.th/products/dell-inspiron-3511-i3-1115g44gb256gbintel-uhd156fhdw10ms-officemcafee12m2y-premium-support-w56625401sppthw10-3511-pscbmb-w-notebook-i2827025967-s10318874595.html',
    'https://www.lazada.co.th/products/0-10-dell-inspiron-3511-w56625401thw10-carbon-blacki3-1115g42yonsiteby-top-computer-i2792387012-s10164971209.html',
    'https://www.lazada.co.th/products/fifa4-pubg-hon-pb-sf-freefire-i616380766-s8779116205.html',
    'https://www.lazada.co.th/products/computer-set-a6-5400k-hd-7540d-d3-1600-8g-amd-csgodeus-exdota2garena-gamesfive-mfree-fire-20-3-2022-cpu2day-i1095448791-s2484578179.html',
    'https://www.lazada.co.th/products/intel-core-i7-pc-24-8g-256g-ssd-computer-all-in-one-asus-i2008792821-s10079657754.html',
    'https://www.lazada.co.th/products/-i1962516938-s10412753761.html',
    'https://www.lazada.co.th/products/core-i3-2-ram8-19y-1-i2736080654-s9922164880.html',
    'https://www.lazada.co.th/products/pubg-gtav-core-i5-ram8g-gt1030-2g-ddr4-5-13-psu-500-600w1-ssd120gb13-i306958125-s534722821.html',
    'https://www.lazada.co.th/products/iring-iring-i-ring-hook-i345500669-s674430289.html',
    'https://www.lazada.co.th/products/-i2230433282-s10189369336.html',
    'https://www.lazada.co.th/products/type-c-5a6a-data-cable-huawei-supercharger-mate9mate9prop10p10plusp20p20prop30p30promate20mate-20pro-1-1-i2870040174-s10476612914.html',
    'https://www.lazada.co.th/products/6-caravan-crew-type-c-to-usb-adapter-otg-usb-c-male-type-c-to-usb-adapter-20-a-female-data-i2247598266-s7510867793.html',
    'https://www.lazada.co.th/products/focus-samsung-galaxy-a23-a22-5g-a33-a32-4g-5g-a42-5g-a53-a52s-a52-5g-a73-a72-a03-a03s-a02s-a02-a12-a11-a21-a31-a01-a71-a51-a13-i327302959-s1345328699.html',
    'https://www.lazada.co.th/products/9d-for-oppo-reno7-reno6-6z-a16-a54-a76-a16k-a94-a95-reno5-a15-a74-a93-reno4-a53-a92-a31-a5s-a3s-a52020-f11pro-f5-f7-f9-r9s-reno2f-realme9i-c35-c21y-c25-c11-i1486508212-s3915112169.html',
    'https://www.lazada.co.th/products/preorder-15-20-harman-kardon-onyx-studio-5-bluetooth-i306052730-s531376566.html',
    'https://www.lazada.co.th/products/xiaomi-redmi-airdots-100-true-wireless-50-tws-i2227475960-s9847378630.html',
    'https://www.lazada.co.th/products/usbtf-card-mn013-aux-i389666212-s756848649.html',
    'https://www.lazada.co.th/products/s8-akg-samsung-hd-i1622550784-s4457208705.html',
    'https://www.lazada.co.th/products/apple-airpods-with-charging-case-2nd-generation-i306764717-s534220053.html',
    'https://www.lazada.co.th/products/yt-bluetooth-i3053028530-s11221037385.html'

]
# '''gt730 2GB'''
# url = "https://www.lazada.co.th/products/gt730-2gb-i3301291452-s12230721553.html?spm=a2o4m.searchlist.list.3.127aef4ewYv5U6&search=1"
# '''gt630 2gb'''
# url2 = "https://www.lazada.co.th/products/vga-gigabyte-gt-630-2gb-128-bit-i3280164978-s12174436215.html?spm=a2o4m.searchlist.list.5.127aef4ewjOF21&search=1"
# '''rtx = 3050 8gb'''
# url3 = "https://www.lazada.co.th/products/asus-rtx-3050-phoenix-8gb-vga-geforce-graphic-card-i3371254754-s12481155971.html?spm=a2o4m.searchlist.list.79.127aef4ejtLQbd&search=1"

# url4 = "https://www.ebay.com/itm/265287549827?epid=11051301031&_trkparms=ispr%3D1&hash=item3dc45ec383:g:cTkAAOSwdRdhKTCD&amdata=enc%3AAQAGAAACkPYe5NmHp%252B2JMhMi7yxGiTJkPrKr5t53CooMSQt2orsStdebXPz4ZTXCT8FI9kPBhwefDFfmEJPNZyN7JX5OlTFDgH5VPiJAveEbXRwtZjJZno1jzEXxNhiOdZ%252FaJbHLqHjixkHIFyXy%252BuajgXazfNL2Pja5hfe4x1u89b8RssuF%252BNCMWzbDS4vauLiCfOg2%252FrrEGlOCdjvkEGN7rVgSLAJRsOQq1VQ08Ffm16s7UXK6MfR2bId%252Fk9qEWnqog%252BU2eHZzfWyA%252FyjyQ1CmHkpauqUBWmeRePQI3NSvU4%252BjXs9GY0v%252BdMaEph9q8rQM5xA%252F9aQssJEdVO%252F%252FSC7oxPZMoHfe20nMyq3bK4%252FJOdnf2MNai0EP6RdPe5%252Fuk7q2dfA6VG8GKYiwOIx72I6GlfkX%252BPn7IThpjFxD7cfxSmbs3wIJjduOaqu0G7A578%252BR7CebjAa0p1BUzPlaAHVRdf9%252BvG2q3VAWxUYyKhovzSzDrS8gDffXwGje31F9Y2nujxmkWC1cau%252FsQEjJVx70rOW%252B2o3Pm0Q5Qq%252Bo49qyGOJcMe3IP%252BbrbXnRxRrZRzTAVjYVT2r%252Fi9oRVhM6fOODS7Rqje45QDrZ9RWYwfk3tAzUxXPRmB4IdAxTTHiMK7V%252BGaUmxqNsSPHd4wlACfJmBWSsSpGSmfVUWsgSFVcXJJmGA7NwqsWzFqOHijB1mGpwjg%252F%252BUyFZgkOwEYZTVUeMJeooS87PgaL45EacbdX%252FgGK6z1nFOsadwvt06kwe%252BHkKjZ0yycM3ASvpnXsNoDNsj6J96sRyyWrDnyiGaCOhSIQxIv5jj80ACR9avY6mAGNXdtJ7rJYSfpjp0WBN5CP%252FhKu3ewCzbUPM4kcFx9w1IyY9uR%252BF%7Cclp%3A2334524%7Ctkp%3ABFBMsNKjk99f"
# url5 = "https://www.ebay.com/itm/185281932182?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20200818143230%26meid%3D876a398ee27a4e7a9750711107d33074%26pid%3D101224%26rk%3D3%26rkt%3D5%26sd%3D265287549827%26itm%3D185281932182%26pmt%3D0%26noa%3D1%26pg%3D2047675%26algv%3DDefaultOrganicWeb%26brand%3DASUS&_trksid=p2047675.c101224.m-1"
# url6 = "https://www.ebay.com/itm/294018679165?_trkparms=pageci%3Aad6bee17-8e67-11ec-80fd-f6af9a1ce477%7Cparentrq%3Afdaf8fd217e0a744852fc889fffa2cba%7Ciid%3A1"

# url7 = "https://portal.weloveshopping.com/product/L90702790"
# url8 ="https://portal.weloveshopping.com/product/L90302979"
with open("test3.csv","w",newline="",encoding='utf-8') as f:
    fw = csv.writer(f)
    fw.writerow(['ชื่อร้าน','ชื่อสินค้า','ราคา','รูปภาพ','หมวดหมู่'])
    # for i in range(0,10):
    #     fw.writerow([i,i])
    for i in url_general_lazada:
        l = Lazada(i)
        fw.writerow([l.getData()[0],l.getData()[1],l.getData()[2],l.getData()[3],l.getData()[4]])
        # print(l.getData())
    
# l = Lazada(i)
# print(l.getData())
# url_lazada = [
#     'https://www.lazada.co.th/products/gt730-2gb-i3301291452-s12230721553.html?spm=a2o4m.searchlist.list.3.127aef4ewYv5U6&search=1',
#     'https://www.lazada.co.th/products/vga-gigabyte-gt-630-2gb-128-bit-i3280164978-s12174436215.html?spm=a2o4m.searchlist.list.5.127aef4ewjOF21&search=1',
#     'https://www.lazada.co.th/products/asus-rtx-3050-phoenix-8gb-vga-geforce-graphic-card-i3371254754-s12481155971.html?spm=a2o4m.searchlist.list.79.127aef4ejtLQbd&search=1'
# ]


