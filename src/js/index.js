var str = [
    {"title":"HUAWEI nova 5i","标题链接":"https://www.vmall.com/product/10086191812395.html","img":"https://res0.vmallres.com/pimages//product/6901443355143/428_428_E455CEB7FFF0BBC92512AF0B51F5A56BEB1E459385B1B22Emp.png","grid":"领券减100|赠好礼","picre":"¥1799","id":"1"},
    {"title":"荣耀9X PRO","标题链接":"https://www.vmall.com/product/10086466602618.html","img":"https://res0.vmallres.com/pimages//product/6901443320394/428_428_1563504284133mp.png","grid":"优惠200 送运动蓝牙耳机","picre":"¥1999","id":"2"},
    {"title":"华为畅享10 Plus","标题链接":"https://www.vmall.com/product/10086291072503.html","img":"https://res0.vmallres.com/pimages//product/6901443327690/428_428_50BAC6E20ED77CBBE6D44BD831603E6F0FB45173DB1EE8B2mp.png","grid":"最高领券减150","picre":"¥1399","id":"3"},
    {"title":"荣耀20S","标题链接":"https://www.vmall.com/product/10086452612142.html","img":"https://res0.vmallres.com/pimages//product/6901443323753/428_428_189FA79392B572C21EE009917E689200B6B6089FEB1C4ED9mp.png","grid":"最高优惠300","picre":"¥1599","id":"4"},
    {"title":"HUAWEI nova 6 SE","标题链接":"https://www.vmall.com/product/10086776160490.html","img":"https://res0.vmallres.com/pimages//product/6901443363117/428_428_AB008D014A661DF6E52E184269C6A8A453885402D7D6FC0Bmp.png","grid":"赠好礼|享6期免息","picre":"¥2199","id":"5"},
    {"title":"荣耀20","标题链接":"https://www.vmall.com/product/10086244199203.html","img":"https://res0.vmallres.com/pimages//product/6901443304332/428_428_1558244819612mp.png","grid":"最高优惠600元","picre":"¥2099","id":"6"},
    {"title":"HUAWEI Mate 30 RS 保时捷设计","标题链接":"https://www.vmall.com/product/10086374426533.html","img":"https://res0.vmallres.com/pimages//product/6901443353347/428_428_484D42DB83550E7CF59813E6BE3E2A9A4CF07CF0E75E32A3mp.png","grid":"享12期免息","picre":"¥12999","id":"7"},
    {"title":"HUAWEI nova 5i Pro","标题链接":"https://www.vmall.com/product/10086718678107.html","img":"https://res0.vmallres.com/pimages//product/6901443316526/428_428_1563781926439mp.png","grid":"领券减100","picre":"¥2099","id":"8"},
    {"title":"荣耀8X Max","标题链接":"https://www.vmall.com/product/10086712964531.html","img":"https://res0.vmallres.com/pimages//product/6901443258574/428_428_1550885810815mp.png","grid":"最高降800元","picre":"¥999","id":"9"},
    {"title":"华为畅享10","标题链接":"https://www.vmall.com/product/10086835089299.html","img":"https://res0.vmallres.com/pimages//product/6901443354986/428_428_EBE4A3E6989BED3C00249E4629090CDB8563D5C6F269F447mp.png","grid":"最高领券减150","picre":"¥1299","id":"10"},
    {"title":"荣耀20i","标题链接":"https://www.vmall.com/product/10086905978384.html","img":"https://res0.vmallres.com/pimages//product/6901443307128/428_428_5B9ED48038E3BC14F2D8890AEE7CE8FAA099E10F864816B7mp.png","grid":"最高降500元","picre":"¥1399","id":"11"},
    {"title":"华为畅享 10S","标题链接":"https://www.vmall.com/product/10086588796413.html","img":"https://res0.vmallres.com/pimages//product/6901443352685/428_428_8A2025793A107CA11BE7E0A1554665EAD00274E1F37690FDmp.png","grid":"最高领券减250","picre":"¥1599","id":"12"},
    {"title":"荣耀Play3e","标题链接":"https://www.vmall.com/product/10086387384591.html","img":"https://res0.vmallres.com/pimages//product/6901443329243/428_428_FADB1B48C9C92E3C47B8518FC93F9747F2D6549ACC4B1FD7mp.png","grid":"购机晒单抽好礼","picre":"¥899","id":"13"},
    {"title":"HUAWEI Mate 20 RS 保时捷设计","标题链接":"https://www.vmall.com/product/10086737332641.html","img":"https://res0.vmallres.com/pimages//product/6901443264797/428_428_1539245339725mp.png","picre":"¥12999","id":"14"},
    {"title":"荣耀Note10","标题链接":"https://www.vmall.com/product/10086305784772.html","img":"https://res0.vmallres.com/pimages//product/6901443253975/428_428_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png","grid":"最高省800享免息到手1599起","picre":"¥1599","id":"15"},
    {"title":"HUAWEI Mate 20 Pro","标题链接":"https://www.vmall.com/product/10086393052224.html","img":"https://res0.vmallres.com/pimages//product/6901443261628/428_428_1539243107477mp.png","grid":"领券减800|12期免息","picre":"¥5099","id":"16"},
    {"title":"HUAWEI Mate 20 X (5G)","标题链接":"https://www.vmall.com/product/10086533947561.html","img":"https://res0.vmallres.com/pimages//product/6901443331635/428_428_B510A01A2C3182A58046679623ADF298DB8AF277F20AD9DDmp.png","grid":"5G双模全网通手机","picre":"¥5199","id":"17"},
    {"title":"HUAWEI Mate 20","标题链接":"https://www.vmall.com/product/10086885129494.html","img":"https://res0.vmallres.com/pimages//product/6901443260232/428_428_1539230426520mp.png","grid":"领券减500|12期免息","picre":"¥3199","id":"18"},
    {"title":"华为畅享9 Plus","标题链接":"https://www.vmall.com/product/10086550008459.html","img":"https://res0.vmallres.com/pimages//product/6901443263820/428_428_1542853172603mp.png","grid":"领券最高优惠300元","picre":"¥1499","id":"19"},
    {"title":"荣耀 MagicBook Pro","标题链接":"https://www.vmall.com/product/10086961613928.html","img":"https://res1.vmallres.com/pimages//product/6901443330744/428_428_52F045B3A4ADEA60CD2CB0B1E1A203FE6A34A56891A300CDmp.png","grid":"3.1低至3999起+赠品","picre":"¥3999","id":"20"},
]



