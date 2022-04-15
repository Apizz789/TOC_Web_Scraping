from time import time
# from WebClass_Scraping import Lazada,Ebay,Weloveshop
import time
url_smartphone = [
    ['https://www.lazada.co.th/products/apple-iphone-12-i1760100880-s5098910498.html',
    'https://www.ebay.com/itm/304077001458',
    'https://portal.weloveshopping.com/product/L91720405'
    ],
    ['https://www.lazada.co.th/products/samsung-galaxy-s10-5g-ram8gb-rom256gb-67-inches-i613084050-s1158838871.html',
    'https://www.ebay.com/itm/255107207538',
    'https://portal.weloveshopping.com/product/L91683089'
    ],
    ['https://www.lazada.co.th/products/samsung-galaxy-a32-4g-8128gb-sm-a325-by-lazada-superiphone-i2222864076-s7443500616.html',
    'https://www.ebay.com/itm/144404008422',
    'https://portal.weloveshopping.com/product/L91761715'
    ],
    ['https://www.lazada.co.th/products/apple-iphone-11-istudio-by-uficon-i914126688-s1854050616.html',
    'https://www.ebay.com/itm/255107476973',
    'https://portal.weloveshopping.com/product/L91733145'
    ],
    ['https://www.lazada.co.th/products/iphone-se-2022-i3531043764-s13173189944.html',
    'https://www.ebay.com/itm/294301058250',
    'https://portal.weloveshopping.com/product/L91684427'
    ],
    ['https://www.lazada.co.th/products/iphone-11-without-adapter-i1751886631-s5061880604.html',
    'https://www.ebay.com/itm/124894924869',
    'https://portal.weloveshopping.com/product/L91618739']
]

url_tablet = [
    ['https://www.lazada.co.th/products/109-inch-ipad-air-wi-fi-tha-i1592264513-s4327372288.html',
    'https://www.ebay.com/itm/114955572784',
    'https://portal.weloveshopping.com/product/L91104905',
    ],

    ['https://www.lazada.co.th/products/huawei-mediapad-m5-lite-8-ram-3-gb-rom-32-gb-1-icom-i1017810281-s2247334352.html',
    'https://www.ebay.com/itm/334400526247',
    'https://portal.weloveshopping.com/product/L91764249'
    ]
]
url_pencil = [
    ['https://www.lazada.co.th/products/apple-pencil-2nd-generation-i265106982-s412071936.html',
    'https://www.ebay.com/itm/255483283953',
    'https://portal.weloveshopping.com/product/L91730894'
    ]
]

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

url_general_ebay = [
    'https://www.ebay.com/itm/165426924570',
    'https://www.ebay.com/itm/144492029700',
    'https://www.ebay.com/itm/384830452016',
    'https://www.ebay.com/itm/163306737259',
    'https://www.ebay.com/itm/165426928033',
    'https://www.ebay.com/itm/304038713992',
    'https://www.ebay.com/itm/164904799176',
    'https://www.ebay.com/itm/294171050105',
    'https://www.ebay.com/itm/324725503075',
    'https://www.ebay.com/itm/122256127126',
    'https://www.ebay.com/itm/144500049975',
    'https://www.ebay.com/itm/144488369107',

]

url_general_weloveshop = [
    'https://portal.weloveshopping.com/product/L91319943',
    'https://portal.weloveshopping.com/product/L91319937',
    'https://portal.weloveshopping.com/product/L91579724',
    'https://portal.weloveshopping.com/product/L91697395',
    'https://portal.weloveshopping.com/product/L91466327',
    'https://portal.weloveshopping.com/product/L90645858',
    'https://portal.weloveshopping.com/product/L91503926',
    'https://portal.weloveshopping.com/product/L91659384',
    'https://portal.weloveshopping.com/product/L91678428',
    'https://portal.weloveshopping.com/product/L91749404',
    'https://portal.weloveshopping.com/product/L91766934',
    'https://portal.weloveshopping.com/product/L91766901',
    'https://portal.weloveshopping.com/product/L91687182',
    'https://portal.weloveshopping.com/product/L91687182',
    'https://portal.weloveshopping.com/product/L90623374',
    'https://portal.weloveshopping.com/product/L90934381',
    'https://portal.weloveshopping.com/product/L91274545',
    'https://portal.weloveshopping.com/product/L90980598',
    'https://portal.weloveshopping.com/product/L91687182',
    'https://portal.weloveshopping.com/product/L91091246',
    'https://portal.weloveshopping.com/product/L91392962',
    'https://portal.weloveshopping.com/product/L91392963',
    'https://portal.weloveshopping.com/product/L91031239',
    'https://portal.weloveshopping.com/product/L90886162',
    'https://portal.weloveshopping.com/product/L91573752',
    'https://portal.weloveshopping.com/product/L91042019',
    'https://portal.weloveshopping.com/product/L91057348',
    'https://portal.weloveshopping.com/product/L91430366',
    'https://portal.weloveshopping.com/product/L90895271',
    'https://portal.weloveshopping.com/product/L90796309',
    'https://portal.weloveshopping.com/product/L91307737',
    'https://portal.weloveshopping.com/product/L91739533',
    'https://portal.weloveshopping.com/product/L91739541',
    'https://portal.weloveshopping.com/product/L91738155',
    'https://portal.weloveshopping.com/product/L91738074',
    'https://portal.weloveshopping.com/product/L91739188',
    'https://portal.weloveshopping.com/product/L91739182',
    'https://portal.weloveshopping.com/product/L91630969',
    'https://portal.weloveshopping.com/product/L90883283',
    'https://portal.weloveshopping.com/product/L90884194',
    'https://portal.weloveshopping.com/product/L91267392',
    'https://portal.weloveshopping.com/product/L91003925',
    'https://portal.weloveshopping.com/product/L90164609',
    'https://portal.weloveshopping.com/product/L90358433',
    'https://portal.weloveshopping.com/product/L91479623',
    'https://portal.weloveshopping.com/product/L90948087',
    'https://portal.weloveshopping.com/product/L91527394',
    'https://portal.weloveshopping.com/product/L91524091',
    'https://portal.weloveshopping.com/product/L90254095'
]

# for i in url_general_lazada:
#     laz = Lazada(i)
#     print(laz.getData())


