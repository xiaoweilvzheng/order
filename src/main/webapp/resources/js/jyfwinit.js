//非孵化器
function jyfwinit(map){
	
	map.put("专业投资咨询服务",
			"投资咨询&经济贸易咨询&财务咨询（不得开展审计、验资、查账、评估、会计咨询、代理记账等需经专项审批的业务，不得出具相应的审计报告、验资报告、查账报告、评估报告等文字材料）"+
			"&非证券业务的投资管理、咨询（不得从事下列业务：1、发放贷款、2、公开交易证券类投资或金融衍生品交易、3、以公开方式募集资金、4、对除被投资企业以外的企业提供担保。）&项目投资");
	map.put("项目投资或资产管理服务",
			"项目投资&资产管理&财务咨询（不得开展审计、验资、查账、评估、会计咨询、代理记账等需经专项审批的业务，不得出具相应的审计报告、验资报告、查账报告、评估报告等文字材料）"+
			"&非证券业务的投资管理、咨询（不得从事下列业务：1、发放贷款、2、公开交易证券类投资或金融衍生品交易、3、以公开方式募集资金、4、对除被投资企业以外的企业提供担保。）&经济合同担保（不含融资性担保）");
	map.put("高新技术研发与推广服务",
			"技术开发、技术咨询、技术推广、技术服务、技术转让&自然科学研究和试验发展&软件开发&基础软件服务&应用软件服务（不含医用软件）&环境保护设施运营");
	map.put("互联网O2O服务（不含ICP信息服务）",
			"软件开发&基础软件服务&应用软件服务（不含医用软件）&技术开发、技术咨询、技术推广、技术服务、技术转让"+
			"&汽车租赁服务&房地产信息咨询（不含中介服务）&教育咨询（不含出国留学咨询与中介服务）&旅游信息咨询&企业策划&投资咨询&资产管理&餐饮管理&家庭劳务服务"+
			"&婚姻介绍（不含涉外婚姻介绍）&票务服务（不含航空机票销售代理）");
	map.put("环境保护服务",
			"空气污染监测服务&水污染监测服务&废料监测服务&噪声污染监测服务&土壤质量监测服务&沙漠化监测服务"+
			"&森林生态监测服务&湿地环境监测服务&地质环境监测服务&野生动植物监测服务&水污染治理设施运营服务&海洋污染治理设施运营服务"+
			"&大气污染治理设施运营服务&固体废物污染治理设施运营服务&噪音污染治理设施运营服务&光污染治理设施运营服务&软件开发&基础软件服务&应用软件服务（不含医用软件）&技术开发、技术咨询、技术推广、技术服务、技术转让");
	
	map.put("文化艺术服务",
			"组织文化艺术交流活动（不含演出）&文艺创作&工艺美术创作&文化艺术咨询&工艺美术设计&数字动漫设计"+
			"&游戏设计&会议服务&展览服务&资料编辑服务&销售文具用品、首饰、工艺美术品&个人形象设计&版权贸易&版权经纪&软件开发");
	
	map.put("教育咨询服务",
			"教育咨询（不含出国留学咨询与中介服务）&展览服务&旅游信息咨询&投资咨询&市场调查&软件开发");
	map.put("会展服务",
			"会议服务&展览服务&展台设计服务&企业管理咨询&企业策划&市场调查");
	map.put("广告服务","设计、制作、代理、发布广告&企业管理咨询&企业策划&公共关系服务&市场调查");
	map.put("软件开发服务",
			"软件开发&基础软件服务&应用软件服务（不含医用软件）&技术开发、技术咨询、技术推广、技术服务、技术转让"+
			"&信息系统设计服务&多媒体设计服务&信息系统集成服务&计算机系统服务&数据处理服务&数据库服务&信息系统运行维护服务&服务器租用服务&服务器托管服务");
	
	map.put("网站设计与维护服务",
			"软件开发&基础软件服务&应用软件服务（不含医用软件）&信息系统设计服务&多媒体设计服务&信息系统集成服务"+
			"&信息系统运行维护服务&计算机系统服务&数据处理服务&数据库服务&企业策划");
	map.put("日用品商品贸易",
			"销售服装、鞋帽、化妆品、卫生用品、厨房及卫生间用具、日用品、家用电器、钟表、眼镜、箱包、家具、文具用品、体育用品及器材、首饰、工艺美术品、乐器、照相器材");
	
	map.put("矿产品、化工产品类商品贸易","销售矿产品（经营煤炭的不得在北京地区开展实物煤交易及储运）、沥青（不含煤焦沥青、硝化沥青）、化工产品（不含危险化学品）、润滑油、润滑脂、燃料油、焦炭、非金属矿制品、金属材料、钢材、铜材、铝材、化肥、农药（不含危险化学品农药）");
	
	map.put("建材商品贸易","销售建筑材料、化工产品（不含危险化学品）、金属材料");
	map.put("机电产品商品贸易",
			"销售机械设备、汽车、汽车零配件、两轮摩托车、摩托车零配件、五金产品、电气设备、计算机及辅助设备、软件、通讯设备、广播电视设备（不含卫星电视广播地面接收设施）、电子产品");
	
	map.put("非职业技能培训服务",
			"计算机技术培训&武术技术培训&缝纫技术培训&美术技术培训&摄影技术培训&器乐技术培训&声乐技术培训&舞蹈技术培训&销售日用品、电子产品、乐器、服装");
	map.put("金融外包服务",
			"接受金融机构委托从事金融信息技术外包&接受金融机构委托从事金融业务流程外包&接受金融机构委托从事金融知识流程外包&软件开发&基础软件服务"+
			"&应用软件服务（不含医用软件）");
	
	map.put("产品设计服务",
			"工艺美术设计&工业设计服务&时装设计服务&包装装潢设计服务&多媒体设计服务&动漫设计服务&展台设计服务&模型设计服务");
	map.put("企业管理及商务策划服务",
			"企业策划&会议服务&展览服务&工艺美术设计&数字动漫设计&出租办公用房&软件开发"+
			"&基础软件服务&应用软件服务（不含医用软件）&汽车租赁&摄影服务&照片扩印及处理服务&翻译服务&资料编辑服务"+
			"&打字复印服务&电脑晒图服务&礼仪服务&办公设备租赁服务&通讯设备租赁服务&计算机及辅助设备租赁&计算机和服务设备修理"+
			"&通讯设备修理&办公设备修理&服务器租用服务&服务器托管服务&商标代理服务");
	
	map.put("商业房屋租赁服务",
			"出租商业/办公用房&投资咨询&经济贸易咨询&房地产信息咨询（不含中介服务）");
	map.put("本地生活服务",
			"居家养老服务&家庭劳务服务&婚姻介绍（不含涉外婚姻介绍）&婚庆礼仪服务&汽车租赁"+
			"&装卸服务&清洁服务&宠物美容服务&票务服务（不含航空机票销售代理）&摄影服务&照片扩印及处理服务&翻译服务"+
			"&打字复印服务&电脑晒图服务&裁剪服装&家用电子产品修理&日用电器修理&自行车修理&鞋与皮革修理&擦鞋服务&家具修理"+
			"&照相机维修&钟表维修");
	map.put("儿童教育服务",
			"教育咨询（不含出国留学咨询与中介服务）&室内游戏娱乐设施经营服务&室外游戏娱乐设施经营服务&体育活动组织服务&体育运动项目经营（高危险性体育项目除外）&家庭劳务服务&健康咨询");
	map.put("经营健身娱乐场所","体育运动项目经营（高危险性体育项目除外）&体育活动组织服务&体育俱乐部运营服务&健康咨询&健康管理&健身服务");
	map.put("经营健康服务机构（非诊疗）","健康咨询&健康管理&医学研究和试验发展（不含诊疗服务）&销售Ⅰ类医疗器械&医疗设备租赁服务");
	map.put("汽车服务","销售汽车&汽车租赁服务&汽车装饰服务&汽车清洗服务（不含传统洗车）&技术咨询、技术服务");
}

//孵化器
function jyfwfhq(map){
	
    map.put("专业商业咨询服务",
    		"经济贸易咨询&财务咨询（不得开展审计、验资、查账、评估、会计咨询、代理记账等需经专项审批的业务，不得出具相应的审计报告、验资报告、查账报告、评估报告等文字材料）");
	map.put("高新技术研发与推广服务",
			"技术开发、技术咨询、技术推广、技术服务、技术转让&自然科学研究和试验发展&软件开发&基础软件服务&应用软件服务（不含医用软件）");

	map.put("互联网O2O服务（不含ICP信息服务）",
			"软件开发&基础软件服务&应用软件服务（不含医用软件）&技术开发、技术咨询、技术推广、技术服务、技术转让&教育咨询（不含出国留学咨询与中介服务）"+
			"&企业策划&餐饮管理&家庭劳务服务&婚姻介绍（不含涉外婚姻介绍）&票务服务（不含航空机票销售代理）");
	
	map.put("文化艺术服务",
			"组织文化艺术交流活动（不含演出）&文艺创作&工艺美术创作&资料编辑服务&文化艺术咨询&工艺美术设计&数字动漫设计&游戏设计&会议服务&展览服务&销售文具用品、首饰、工艺美术品");

	map.put("教育咨询服务",
			"教育咨询（不含出国留学咨询与中介服务）&展览服务&市场调查&软件开发");
	map.put("会展服务","会议服务&展览服务&展台设计服务&企业管理咨询&企业策划&市场调查");
	
	map.put("广告服务","设计、制作、代理、发布广告&企业管理咨询&企业策划&公共关系服务&市场调查");
	
	map.put("软件开发服务",
			"软件开发&基础软件服务&应用软件服务（不含医用软件）&技术开发、技术咨询、技术推广、技术服务、技术转让"+
			"&信息系统设计服务&多媒体设计服务&信息系统集成服务&计算机系统服务&数据处理服务&数据库服务&信息系统运行维护服务&服务器租用服务");
	map.put("网站设计与维护服务",
			"软件开发&基础软件服务&应用软件服务（不含医用软件）&技术开发、技术咨询、技术推广、技术服务、技术转让"+
			"&信息系统设计服务&多媒体设计服务&信息系统集成服务&信息系统运行维护服务&计算机系统服务&数据处理服务&数据库服务&企业策划");
	map.put("日用品商品贸易",
			"销售服装、鞋帽、化妆品、卫生用品、厨房及卫生间用具、日用品、家用电器、钟表、眼镜、箱包、家具、文具用品、体育用品及器材、首饰、工艺美术品、乐器、照相器材");
	
	map.put("矿产品、化工产品商品贸易",
			"销售矿产品（经营煤炭的不得在北京地区开展实物煤交易及储运）、沥青（不含煤焦沥青、硝化沥青）、化工产品（不含危险化学品）、润滑油、润滑脂、燃料油、焦炭、非金属矿制品、金属材料、钢材、铜材、铝材、化肥、农药（不含危险化学品农药）");
	map.put("建材商品贸易",
			"销售建筑材料、化工产品（不含危险化学品）、金属材料");
	map.put("机电产品商品贸易",
			"销售机械设备、汽车、汽车零配件、两轮摩托车、摩托车零配件、五金产品、电气设备、计算机及辅助设备、软件、通讯设备、广播电视设备（不含卫星电视广播地面接收设施）、电子产品");
	map.put("产品设计服务",
			"工艺美术设计&工业设计服务&时装设计服务&包装装潢设计服务&多媒体设计服务&动漫设计服务&展台设计服务&模型设计服务");
	map.put("企业管理及商务策划服务",
			"企业策划&会议服务&展览服务&工艺美术设计&数字动漫设计&软件开发&基础软件服务&应用软件服务（不含医用软件）&摄影服务&翻译服务&资料编辑服务&礼仪服务&办公设备租赁服务&通讯设备租赁服务&计算机及辅助设备租赁&计算机和服务设备修理&通讯设备修理&办公设备修理&服务器租用服务");
	map.put("本地生活服务",
			"家庭劳务服务&婚姻介绍（不含涉外婚姻介绍）&婚庆礼仪服务&装卸服务&清洁服务&票务服务（不含航空机票销售代理）&摄影服务&翻译服务&家用电子产品修理&日用电器修理&自行车修理&鞋与皮革修理&擦鞋服务&家具修理&照相机维修&钟表维修");
	map.put("儿童教育服务","教育咨询（不含出国留学咨询与中介服务）&体育活动组织服务&家庭劳务服务");
 }