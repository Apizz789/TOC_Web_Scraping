from bs4 import BeautifulSoup as b4 , SoupStrainer as s4
import requests
import io

class Lazada:
    def __init__(self,url):
        self.url = url
        self.web_data = None
        self.soup = None
        self.soup2 = None
        self.find_word = None
        self.price = None
        self.img = None
        self.requests()

    def requests(self):
        self.web_data = requests.get(self.url)
        self.pull()
    
    def pull(self):
        self.soup = b4(self.web_data.text,'html.parser')
        self.soup2 = b4(self.web_data.text,'lxml',parse_only=s4('img'))
        self.findtag()

    def findtag(self):
        self.find_word = self.soup.find_all('h1',{'class','pdp-mod-product-badge-title'})
        self.price = self.soup.find_all('span',{'class':'pdp-price pdp-price_type_normal pdp-price_color_orange pdp-price_size_xl'})
        self.img = self.soup2.find_all('img',{'class':'pdp-mod-common-image gallery-preview-panel__image'})

    def getData(self):
        return self.find_word[0].get_text(strip=True),self.price[0].get_text(strip=True),self.img[0]['src']


class Ebay:
    def __init__(self,url):
        self.url = url
        self.web_data = None
        self.soup = None
        self.soup2 = None
        self.find_word = None
        self.price = None
        self.register = None
        self.img = None
        self.price_tag = ''
        self.real_price = ''
        self.requests()
    
    def requests(self):
        self.web_data = requests.get(self.url)
        self.pull()
    
    def pull(self):
        self.soup = b4(self.web_data.text,'html.parser')
        self.soup2 = b4(self.web_data.text,'lxml',parse_only=s4('img'))
        self.findtag()

    def findtag(self):
        self.find_word = self.soup.find_all('span',{'class','u-dspn'})
        self.price = self.soup.find_all('div',{'class':'mainPrice'})[0]
        self.img = self.soup2.find_all('img',{'class':'img img300'})
        
    def getData(self):
        # print(find_word[0].get_text(strip=True))
        self.register = b4(self.price.text,'html.parser')   
        for i in self.register:
            self.price_tag += i
        self.price_tag = self.price_tag.split('\n')
        self.real_price = self.price_tag[8].replace('Approximately ','').replace('(including shipping)','')
        return self.find_word[0].get_text(strip=True),self.real_price,self.img[0]['src']


class Weloveshop:
    def __init__(self,url):
        self.url = url
        self.web_data = None
        self.soup = None
        self.soup2 = None
        self.find_word = None
        self.price = None
        self.img = None
        self.requests()

    def requests(self):
        self.web_data = requests.get(self.url)
        self.pull()
    
    def pull(self):
        self.soup = b4(self.web_data.text,'html.parser')
        self.soup2 = b4(self.web_data.text,'lxml',parse_only=s4('img'))
        self.findtag()

    def findtag(self):
        self.find_word = self.soup.find('h1')
        self.price = self.soup.find_all('strong',{'class':'font-34px color-main'})
        self.img = self.soup2.find_all('img',{'class':'active'})
    
    def getData(self):
        return self.find_word.get_text(strip=True),self.price[0].get_text(strip=True)+' บาท',self.img[0]['src']

'''gt730 2GB'''
url = "https://www.lazada.co.th/products/gt730-2gb-i3301291452-s12230721553.html?spm=a2o4m.searchlist.list.3.127aef4ewYv5U6&search=1"
'''gt630 2gb'''
url2 = "https://www.lazada.co.th/products/vga-gigabyte-gt-630-2gb-128-bit-i3280164978-s12174436215.html?spm=a2o4m.searchlist.list.5.127aef4ewjOF21&search=1"
'''rtx = 3050 8gb'''
url3 = "https://www.lazada.co.th/products/asus-rtx-3050-phoenix-8gb-vga-geforce-graphic-card-i3371254754-s12481155971.html?spm=a2o4m.searchlist.list.79.127aef4ejtLQbd&search=1"

url4 = "https://www.ebay.com/itm/265287549827?epid=11051301031&_trkparms=ispr%3D1&hash=item3dc45ec383:g:cTkAAOSwdRdhKTCD&amdata=enc%3AAQAGAAACkPYe5NmHp%252B2JMhMi7yxGiTJkPrKr5t53CooMSQt2orsStdebXPz4ZTXCT8FI9kPBhwefDFfmEJPNZyN7JX5OlTFDgH5VPiJAveEbXRwtZjJZno1jzEXxNhiOdZ%252FaJbHLqHjixkHIFyXy%252BuajgXazfNL2Pja5hfe4x1u89b8RssuF%252BNCMWzbDS4vauLiCfOg2%252FrrEGlOCdjvkEGN7rVgSLAJRsOQq1VQ08Ffm16s7UXK6MfR2bId%252Fk9qEWnqog%252BU2eHZzfWyA%252FyjyQ1CmHkpauqUBWmeRePQI3NSvU4%252BjXs9GY0v%252BdMaEph9q8rQM5xA%252F9aQssJEdVO%252F%252FSC7oxPZMoHfe20nMyq3bK4%252FJOdnf2MNai0EP6RdPe5%252Fuk7q2dfA6VG8GKYiwOIx72I6GlfkX%252BPn7IThpjFxD7cfxSmbs3wIJjduOaqu0G7A578%252BR7CebjAa0p1BUzPlaAHVRdf9%252BvG2q3VAWxUYyKhovzSzDrS8gDffXwGje31F9Y2nujxmkWC1cau%252FsQEjJVx70rOW%252B2o3Pm0Q5Qq%252Bo49qyGOJcMe3IP%252BbrbXnRxRrZRzTAVjYVT2r%252Fi9oRVhM6fOODS7Rqje45QDrZ9RWYwfk3tAzUxXPRmB4IdAxTTHiMK7V%252BGaUmxqNsSPHd4wlACfJmBWSsSpGSmfVUWsgSFVcXJJmGA7NwqsWzFqOHijB1mGpwjg%252F%252BUyFZgkOwEYZTVUeMJeooS87PgaL45EacbdX%252FgGK6z1nFOsadwvt06kwe%252BHkKjZ0yycM3ASvpnXsNoDNsj6J96sRyyWrDnyiGaCOhSIQxIv5jj80ACR9avY6mAGNXdtJ7rJYSfpjp0WBN5CP%252FhKu3ewCzbUPM4kcFx9w1IyY9uR%252BF%7Cclp%3A2334524%7Ctkp%3ABFBMsNKjk99f"
url5 = "https://www.ebay.com/itm/185281932182?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20200818143230%26meid%3D876a398ee27a4e7a9750711107d33074%26pid%3D101224%26rk%3D3%26rkt%3D5%26sd%3D265287549827%26itm%3D185281932182%26pmt%3D0%26noa%3D1%26pg%3D2047675%26algv%3DDefaultOrganicWeb%26brand%3DASUS&_trksid=p2047675.c101224.m-1"
url6 = "https://www.ebay.com/itm/294018679165?_trkparms=pageci%3Aad6bee17-8e67-11ec-80fd-f6af9a1ce477%7Cparentrq%3Afdaf8fd217e0a744852fc889fffa2cba%7Ciid%3A1"

url7 = "https://portal.weloveshopping.com/product/L90702790"
url8 ="https://portal.weloveshopping.com/product/L90302979"


l = Lazada(url2)
print(l.getData())


