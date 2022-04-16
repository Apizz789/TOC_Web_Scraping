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
    'https://www.lazada.co.th/products/yt-bluetooth-i3053028530-s11221037385.html',
    'https://www.lazada.co.th/products/oneplus-nord-2-5g8-128gb-ai-lite-flagship-mediatek-dim-i3129141412-s11644793726.html',
    'https://www.lazada.co.th/products/new-xiaomi-mi-11t-mi11t-pro-snapdragon-888-667-amoled-108mp-mobilestation-i3010875766.html',
    'https://www.lazada.co.th/products/mobile-tcl-20r-5g-ram-4gb-rom-128gb-65-13mp-1-by-wpn-mobile-i3582724562-s13379833729.html',
    'https://www.lazada.co.th/products/0-10-nubia-redmagic-red-magic-66pro-1212816256-global-version-1-i2316378255.html',
    'https://www.lazada.co.th/products/samsung-galaxy-m33-5g-8128gb-otto-1290-i2589718075-s13176247430.html'
    'https://www.lazada.co.th/products/142022-wifi-tablet-i2601499912.html',
    'https://www.lazada.co.th/products/huawei-mediapad-m6-ram4128gb1-108-2k-4-i761712097.html',
    'https://www.lazada.co.th/products/samsung-galaxy-tab-a7-lite-wifi-332-gb-i2732814801.html',
    'https://www.lazada.co.th/products/xiaomi-pad-5-mi-pad-5-11wqhd-120hz-snapdragon-860-8720mah-15-i2794655469.html',
    'https://www.lazada.co.th/products/pad-gen-9-1-th-i3082866416.html',
    'https://www.lazada.co.th/products/dell-inspiron-3511-i3-1115g44gb256gbintel-uhd156fhdw10ms-officemcafee12m2y-premium-support-w56625401sppthw10-3511-pscbmb-w-notebook-i2827025967.html',
    'https://www.lazada.co.th/products/apple-macbook-pro-m1-chip-with-8-core-cpu-and-8-core-gpu-256gb-ssd-13-inch-i1799590985-s5327182714.html',
    'https://www.lazada.co.th/products/lenovo-ideapad-d330-intel-celeron-n40204gb64gb101hdw10-pro1y-10igl-82h0000lta-notebook-2-in-1-i2633060779.html',
    'https://www.lazada.co.th/products/0-10-asus-tuf-gaming-f15-fx506lh-hn002ti5-10300h2y1ybynotebookstore-i2348453109.html',
    'https://www.lazada.co.th/products/0-10-hp-15s-du1534tui3-10110u2yonsiteby-notebook-store-i3288887522.html',
    'https://www.lazada.co.th/products/44-onyx-studio-5-1king-goods-shop-i1677370078.html',
    'https://www.lazada.co.th/products/100blue-yeti-nano-usb-microphone-24-bit-pop-filter-i274614465.html',
    'https://www.lazada.co.th/products/sony-wf-1000x-tws-5-mini-wireless-earbuds-earphones-bluetooth-50-headsets-i3152962083.html',
    'https://www.lazada.co.th/products/pre-order-22-65-aiwa-enigma-bluetooth-speaker-super-bass-i1450684551.html',
    'https://www.lazada.co.th/products/jbl-tune-700-bt-wireless-over-ear-headphones-i1840178568.html',
    'https://www.lazada.co.th/products/jbl-charge-5-bluetooth-speaker-1-i3611083494.html',
    'https://www.lazada.co.th/products/aftershokz-aeropex-2-i399576987.html',
    'https://www.lazada.co.th/products/xiaomi-mi-band-6-smart-watch-156-1y-i2349793523.html',
    'https://www.lazada.co.th/products/suunto-smartwatch-suunto3-2020-made-in-finland-2-i772364498.html',
    'https://www.lazada.co.th/products/4-pack-2-pack-1-pack-namkangmobile-namkangmobile-i2449549721.html',
    'https://www.lazada.co.th/products/mini-a8-gps-tracker-locator-car-kid-global-tracking-device-anti-theft-outdoor-safety-equipment-i404382105.html',
    'https://www.lazada.co.th/products/oculus-quest-2-advanced-all-in-one-vr-gaming-i331362911.html',
    'https://www.lazada.co.th/products/ray-ban-stories-wayfarer-facebook-smart-glasses-i2858822742.html',
    'https://www.lazada.co.th/products/samsung-pro-smart-watch-17-hd-touch-smartwatches-i3425028335.html',
    'https://www.lazada.co.th/products/samsung-smart-tv-55-au7700-uhd-4k-2021-ua55au7700kxxt-i2398188393.html',
    'https://www.lazada.co.th/products/aconatic-led-netflix-tv-smart-tv-netflix-license-4k-uhd-55-55us534an-3-i2843950822.html',
    'https://www.lazada.co.th/products/psi-psix-psi-okd-35-cm-10-i2431839985.html',
    'https://www.lazada.co.th/products/google-chromecast-3rd-gen-free-shipping-1-year-warranty-i277577085.html',
    'https://www.lazada.co.th/products/worldtech-32-android-smart-tv-hd-ready-youtubeinternetwifi-hdmi-2xusb-3xhdmi-0-i262163932.html',
    'https://www.lazada.co.th/products/rigal-rd828-full-hd-android90-wifi-and-multiscreen-2in11920x1080-4500-lumens-2021-led-50000-ios-android-i309748599.html',
    'https://www.lazada.co.th/products/tx6-4gb-32gb-allwinner-h6-android-90-4k-thaiboxshop-i351296155.html'
    'https://www.lazada.co.th/products/samsung-15-wa15r6380bvst-i2998562947.html',
    'https://www.lazada.co.th/products/electrolux-etd29kc-i219088617.html',
    'https://www.lazada.co.th/products/tecno-63-tnp-so863-mc-i1446014673.html',
    'https://www.lazada.co.th/products/candy-12000-btu-cwp12ea03t-i1995780597.html',
    'https://www.lazada.co.th/products/xiaomi-water-purifier-app-mi-home-i2389125080.html',
    'https://www.lazada.co.th/products/46l36l-1812-i2814790143.html',
    'https://www.lazada.co.th/products/hisense-1-mini-bar-46-16q-rr60d4ad-3-i3395004692.html',
    'https://www.lazada.co.th/products/macher-coffee-i3307272484.html',
    'https://www.lazada.co.th/products/100-50-i428454710.html',
    'https://www.lazada.co.th/products/gingerlic-100-i2276724864.html',
    'https://www.lazada.co.th/products/cocoa-dutch-100-i2432369668.html',
    'https://www.lazada.co.th/products/-i1936144438.html',
    'https://www.lazada.co.th/products/moccona-royal-gold-120-3-i3178926849.html',
    'https://www.lazada.co.th/products/higoat-21-x-15-i268835285-s420996399.html',
    'https://www.lazada.co.th/products/truffle-mayo-heartyspoon-brand-i734564585.html',
    'https://www.lazada.co.th/products/diamond-grains-prebiotic-400-i235954110.html',
    'https://www.lazada.co.th/products/100g-i3016118922.html',
    'https://www.lazada.co.th/products/chubby-cheeks-i2701067495.html',
    'https://www.lazada.co.th/products/dark-chocolate-200g-i2770606401.html',
    'https://www.lazada.co.th/products/3-70-i1315872735.html',
    'https://www.lazada.co.th/products/diamond-grains-aurora-400-granola-i2839265961.html',
    'https://www.lazada.co.th/products/k71-i1179342902.html',
    'https://www.lazada.co.th/products/gsm3-5-2-i2179552139.html',
    'https://www.lazada.co.th/products/keen-uneek-36-45-size-i3630191015.html',
    'https://www.lazada.co.th/products/cocopie-2022-2022-021619-i3413077264.html',
    'https://www.lazada.co.th/products/zoey-2021-100722-i2833314143.html',
    'https://www.lazada.co.th/products/salome-032808-i3603743676.html',
    'https://www.lazada.co.th/products/set3-set-3pcs-002-i2361250655.html',
    'https://www.lazada.co.th/products/ef-040201-i3625004626.html',
    'https://www.lazada.co.th/products/-i3210564414.html',
    'https://www.lazada.co.th/products/ef-040704-i3642531791.html',
    'https://www.lazada.co.th/products/keen-uneek-36-45-size-i3630111407.html',
    'https://www.lazada.co.th/products/zeus-sports-1-set-2-i3612001841.html',
    'https://www.lazada.co.th/products/mj-i2238276105.html',
    'https://www.lazada.co.th/products/-i609934343.html',
    'https://www.lazada.co.th/products/zeed-360-i1952176589.html',
    'https://www.lazada.co.th/products/-i2697366805.html',
    'https://www.lazada.co.th/products/plyo-box-plyometrics-plyo-workout-jump-box-plyo-box-plyometrics-box-i368010990.html',
    'https://www.lazada.co.th/products/aolikes-rb-3603-size-m-8-i2163034080.html',
    'https://www.lazada.co.th/products/my-hi-eva-25-i2791986941.html',
    'https://www.lazada.co.th/products/65-cm-20-i2623510832.html',
    'https://www.lazada.co.th/products/aolikes-3-i2059272262.html',
    'https://www.lazada.co.th/products/hanaso-gym-sport-bag-travel-bag-i2567664326.html',
    'https://www.lazada.co.th/products/plover-i2806988109.html',
    'https://www.lazada.co.th/products/plover-i2924636578.html',
    'https://www.lazada.co.th/products/sport-waist-bag-i3346890397.html',
    'https://www.lazada.co.th/products/discount-i3642877810.html?',
    'https://www.lazada.co.th/products/envtrendy-i2924251305.html',
    'https://www.lazada.co.th/products/outdoor-products-med-roll-boston-bag-duffle-bag-unisex-bag-od231-i2915646201-s11710134161.html',
        
    

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
    'https://www.ebay.com/itm/224640928625',
    'https://www.ebay.com/p/21049026393',
    'https://www.ebay.com/p/18026492167',
    'https://www.ebay.com/itm/165195924870',
    'https://www.ebay.com/itm/194812223305',
    'https://www.ebay.com/itm/165323647415',
    'https://www.ebay.com/itm/304401730133',
    'https://www.ebay.com/itm/265498174639',
    'https://www.ebay.com/itm/275173524550',
    'https://www.ebay.com/itm/203878659904?epid=228495611',
    'https://www.ebay.com/itm/334384140226',
    'https://www.ebay.com/itm/165281507125',
    'https://www.ebay.com/itm/264711271891',
    'https://www.ebay.com/itm/144505989439',
    'https://www.ebay.com/itm/265642059363',
    'https://www.ebay.com/itm/294554434508',
    'https://www.ebay.com/itm/284692258724',
    'https://www.ebay.com/p/2308824399',
    'https://www.ebay.com/itm/174519926314',
    'https://www.ebay.com/itm/313952530466',
    'https://www.ebay.com/itm/384791614787',
    'https://www.ebay.com/itm/165175251104',
    'https://www.ebay.com/itm/313839586679',
    'https://www.ebay.com/itm/363633258005',
    'https://www.ebay.com/itm/144507152946',
    'https://www.ebay.com/itm/175237035231',
    'https://www.ebay.com/itm/363797323850',
    'https://www.ebay.com/p/2244065067',
    'https://www.ebay.com/itm/363803536879',
    'https://www.ebay.com/itm/353926055379',
    'https://www.ebay.com/itm/134086509286',
    'https://www.ebay.com/itm/234510910690',
    'https://www.ebay.com/itm/234510092485',
    'https://www.ebay.com/itm/313861002329',
    'https://www.ebay.com/itm/324646379042',
    'https://www.ebay.com/itm/403557820748',
    'https://www.ebay.com/itm/153981152634',
    'https://www.ebay.com/itm/224795085296',
    'https://www.ebay.com/p/10040564015',
    'https://www.ebay.com/itm/194614626913',
    'https://www.ebay.com/itm/265645745756',
    'https://www.ebay.com/itm/115344509106',
    'https://www.ebay.com/itm/143633994513',
    'https://www.ebay.com/itm/124882054562',
    'https://www.ebay.com/itm/124322829723',
    'https://www.ebay.com/itm/194853329123',
    'https://www.ebay.com/itm/224936497925',
    'https://www.ebay.com/itm/184720041645',
    'https://www.ebay.com/itm/224923484171',
    'https://www.ebay.com/itm/224923756990',
    'https://www.ebay.com/itm/224935068804',
    'https://www.ebay.com/itm/284767389430',
    'https://www.ebay.com/itm/275179183524',
    'https://www.ebay.com/itm/284767969970',
    'https://www.ebay.com/itm/284069251872',
    'https://www.ebay.com/itm/115345453955',
    'https://www.ebay.com/itm/313653743337',
    'https://www.ebay.com/itm/284305812310',
    'https://www.ebay.com/itm/373996500685',
    'https://www.ebay.com/itm/125261888699',
    'https://www.ebay.com/itm/222414641319',
    'https://www.ebay.com/itm/152173796986',
    'https://www.ebay.com/itm/324634106535',
    'https://www.ebay.com/itm/174863628783',
    'https://www.ebay.com/itm/353927200221',
    'https://www.ebay.com/itm/224704967108',
    'https://www.ebay.com/itm/175244077677',
    'https://www.ebay.com/itm/265637871289',
    'https://www.ebay.com/itm/294840543984',
    'https://www.ebay.com/itm/334042213890',
    'https://www.ebay.com/itm/403598365011',
    'https://www.ebay.com/itm/133334613656',
    'https://www.ebay.com/itm/272588918241',
    'https://www.ebay.com/itm/224939677421',
    'https://www.ebay.com/itm/313959349699'
    

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



print(len(url_general_ebay))
