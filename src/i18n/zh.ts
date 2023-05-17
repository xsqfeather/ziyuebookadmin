import chineseMessages from "ra-language-chinese";
import { TranslationMessages } from "react-admin";

const customChineseMessages: TranslationMessages = {
  ...chineseMessages,
  ra: {
    ...chineseMessages.ra,
    configurable: {
      ...chineseMessages.ra.configurable,
      customize: "自定义",
    },
  },
  pos: {
    search: "搜索",
    configuration: "设置",
    language: "语言",
    theme: {
      name: "主题",
      light: "明亮",
      dark: "暗黑",
    },
    dashboard: {
      monthly_revenue: "月收入",
      month_history: "30天收入历史",
      new_orders: "新订单",
      pending_reviews: "待审核评论",
      all_reviews: "查看所有评论",
      new_customers: "新客户",
      all_customers: "查看所有客户",
      pending_orders: "待审核订单",
      order: {
        items:
          "由 %{customer_name} 下单, 一个订单 |||| 由 %{customer_name} 下, %{nb_items} 单",
      },
      welcome: {
        title: "欢迎进入权益小镇后台管理系统",
        subtitle: "数据无价，请谨慎操作。",
        ra_button: "查看站点",
        demo_button: "查看API文档",
      },
    },
    menu: {
      sales: "Sales",
      ECommerce: "商品管理",
      menuInterests: "会员权益",
      menuTenant: "租户管理",
      menuUser: "用户管理",
      menuOrder: "订单管理",
      articlesMenu: "文章管理",
      customers: "Customers",
      NFT: "藏品管理",
      Admin: "管理员",
      appSettings: "应用设置",
      menuFinance: "财务管理",
      menuWuAv: "吾爱片管理",
    },
  },
  resources: {
    app_blocks: {
      name: "板块 |||| 板块列表",
      fields: {
        id: "ID",
        name: "名称",
        description: "描述",
        icon: "图标",
      },
    },
    wallet_records: {
      name: "流水记录 |||| 流水记录",
      fields: {
        userId: "用户",
        amount: "金额(元)",
        type: "收支类型",
        createdAt: "发生时间",
        shopId: "所属商家",
        walletType: "钱包类型",
        note: "备注",
        sourceType: "来源类型",
        sourceId: "来源",
      },
    },
    wallets: {
      name: "钱包 |||| 钱包列表",
      fields: {
        balance: "余额",
        userId: "所属用户",
        totalIn: "总收入",
        availableBalance: "可用余额",
        frozenBalance: "冻结余额",
        totalOut: "总支出",
        tenantName: "名称",
      },
    },
    wallet_withdraws: {
      name: "用户提现 |||| 提现列表",
      fields: {
        balance: "余额",
        walletId: "钱包余额(元)",
        userId: "所属用户",
        totalIn: "总收入",
        totalOut: "总支出",
        "bankcard.bankcardNo": "银行卡号",
        bankName: "银行名称",
        bankcardType: "卡类型",
        amount: "提现金额（元）",
        createdAt: "申请时间",
        status: "状态",
        operation: "操作",
        "bankcard.bankcardAccount": "开户人",
      },
    },
    app_settings: {
      name: "应用设置 |||| 设置列表",
      fields: {
        id: "ID",
        name: "名称",
        description: "描述",
      },
    },
    customers: {
      name: "Customer |||| Customers",
      fields: {
        commands: "Orders",
        first_seen: "First seen",
        groups: "Segments",
        last_seen: "Last seen",
        last_seen_gte: "Visited Since",
        name: "Name",
        total_spent: "Total spent",
        password: "Password",
        confirm_password: "Confirm password",
        stateAbbr: "State",
      },
      filters: {
        last_visited: "Last visited",
        today: "Today",
        this_week: "This week",
        last_week: "Last week",
        this_month: "This month",
        last_month: "Last month",
        earlier: "Earlier",
        has_ordered: "Has ordered",
        has_newsletter: "Has newsletter",
        group: "Segment",
      },
      fieldGroups: {
        identity: "Identity",
        address: "Address",
        stats: "Stats",
        history: "History",
        password: "Password",
        change_password: "Change Password",
      },
      page: {
        delete: "Delete Customer",
      },
      errors: {
        password_mismatch:
          "The password confirmation is not the same as the password.",
      },
    },
    wu_avs: {
      name: "吾爱片 |||| 吾爱片列表",
    },
    conversations: {
      name: "对话",
      fields: {
        id: "ID",
        content: "第一个问题",
        createdAt: "创建时间",
        updatedAt: "更新时间",
        title: "主题",
        wordsLength: "字数",
        consume: "消耗(元)",
        status: "状态",
      },
    },
    ai_models: {
      name: "可用模型 |||| 可用模型列表",
    },
    tenants: {
      name: "租户 |||| 租户列表",
      fields: {
        id: "ID",
        name: "名称",
        description: "描述",
        logo: "Logo",
        domain: "域名",
        ownerId: "所属用户",
        tenantName: "名称",
      },
    },
    orders: {
      name: "订单 |||| 订单列表",
      amount: "1 单 |||| %{smart_count} 单",
      title: "Order %{reference}",
      fields: {
        orderNo: "订单编号",
        productId: "商品",
        status: "状态",
        amount: "金额",
        quantity: "数量",
        userId: "下单用户",

        shopId: "所属商家",
        "product.cover.cover": "商品封面",
        address: "Address",
        customer_id: "Customer",
        date_gte: "Passed Since",
        date_lte: "Passed Before",
        nb_items: "Nb Items",
        total_gte: "Min amount",
        returned: "Returned",
        createdAt: "创建时间",
        sku: "SKU",
        "sku.name": "Name",
      },
      section: {
        order: "Order",
        customer: "Customer",
        shipping_address: "Shipping Address",
        items: "Items",
        total: "Totals",
      },
    },
    interests: {
      name: "权益 |||| 权益列表",
      fields: {
        id: "权益ID",
        name: "权益名称",
        description: "权益描述",
        tags: "权益标签",
        useLimit: "使用限制",
        type: "权益分类",
        cover: "封面",
        sellCommission: "建议的版权分红金额",
        days: "权益有效期(天数)",
        times: "权益有效次数",
        "cover.cover": "封面",
        createdAt: "创建时间",
        updatedAt: "更新时间",
      },
    },
    product_interests: {
      name: "绑定权益",
      fields: {
        id: "ID",
        product_id: "产品",
        interest_id: "绑定的权益",
        updated_at: "更新时间",
      },
    },
    user_nfts: {
      name: "用户藏品",
      fields: {
        userId: "所属人",
        nftName: "藏品名",
        nftImage: "封面",
        quantity: "数量",
        updatedAt: "更新时间",
      },
    },
    user_nft_items: {
      name: "用户藏品项",
      fields: {
        userId: "所属人",
        nftName: "藏品名",
        nftImage: "封面",
        quantity: "数量",
        updatedAt: "更新时间",
        "wenChangeBlockPayload.tx_hash": "交易哈希",
        copyNumber: "版次",
        orderId: "来源订单",
      },
    },
    articles: {
      name: "文章 |||| 文章列表",
      fields: {
        id: "ID",
        title: "标题",
        content: "内容",
        cover: "封面",
        createdAt: "创建时间",
        updatedAt: "更新时间",
        description: "描述",
      },
    },
    user_interests: {
      name: "用户权益 |||| 用户权益列表",
      fields: {
        userId: "所属人",
        interestName: "权益名",
        "interest.description": "权益介绍",
        interestUseLimit: "使用限制",
        interestCover: "封面",
        quantity: "数量",
        timesAllow: "可使用次数",
        expiredAt: "过期时间",
        updatedAt: "更新时间",
        createdAt: "创建时间",
        checkID: "核销码",
        status: "状态",
      },
    },
    user_profit_interests: {
      name: "用户分红 |||| 用户分红列表",
      fields: {
        userId: "所属人",
        interestName: "权益名",
        interestDescription: "权益介绍",
        interestCover: "封面",
        quantity: "拥有版权数",
        interestSellCommission: "建议的版权分红金额",
        updatedAt: "更新时间",
        expiredAt: "过期时间",
        "profit.total": "总分红",
        status: "状态",
      },
    },
    contacts: {
      name: "联系方式 |||| 联系方式列表",
      fields: {
        id: "ID",
        contactName: "联系人",
        contactPhone: "联系电话",
        contactEmail: "联系邮箱",
        address: "地址",
        provinceName: "省份",
        cityName: "城市",
        userId: "所属用户",
        districtName: "区县",
        areaName: "区域",
        createdAt: "创建时间",
      },
    },
    deliver_orders: {
      name: "发货单 |||| 发货单列表",
      fields: {
        id: "ID",
        orderIds: "所属订单",
        productIds: "商品",
        contactId: "联系方式",
        deliverNo: "发货单号",
        deliverCompany: "快递公司",
        deliverTime: "发货时间",
        createdAt: "创建时间",
        userId: "所属用户",
        nftImage: "藏品图片",
        nftName: "藏品名",
        quantity: "数量",
        courier: "物流公司",
        courierNo: "物流单号",
        nftItemIds: "藏品项",
        fee: "物流费用",
      },
    },
    product_tags: {
      name: "产品标签",
      fields: {
        id: "ID",
        name: "标签名称",
        createdAt: "创建时间",
        updatedAt: "更新时间",
        description: "标签描述",
      },
    },
    product_categories: {
      name: "产品分类",
      fields: {
        id: "ID",
        name: "名称",
        createdAt: "创建时间",
        updatedAt: "更新时间",
        description: "分类描述",
        superId: "上级分类",
        blockWeight: "板块权重",
        blockId: "板块ID",
      },
    },
    wen_change_nfts: {
      name: "藏品 |||| 藏品列表",
      fields: {
        id: "编号",
        name: "名称",
        description: "描述",
        brief: "简介",
        creatorId: "创作者",
        tags: "标签",
        cover: "封面",
        format: "格式",
        image: "原图",
        video: "视频",
        type: "类型",
        audio: "音频",
        webUrl: "网址/模型",
        "cover.cover": "封面",
        wenChangeAddress: "区块链地址",
        createdAt: "创建于",
      },
    },
    memberships: {
      name: "会员身份 |||| 会员身份",
      fields: {
        id: "编号",
        name: "名称",
        description: "描述",
        creatorId: "创作者",
        tags: "标签",
        cover: "封面",
        format: "格式",
        image: "原图",
        shopId: "所属店铺",
        video: "视频",
        audio: "音频",
        webUrl: "网址/模型",
        "cover.cover": "封面",
        wenChangeAddress: "区块链地址",
        createdAt: "创建于",
        interestIds: "绑定的权益",
      },
    },
    membership_cards: {
      name: "会员卡 |||| 会员卡",
      fields: {
        id: "编号",
        name: "名称",
        description: "描述",
        "cover.origin": "封面",
        cover: "封面",
        brief: "简介",
        creatorId: "创作者",
        membershipId: "所属会员身份",
        createdAt: "发行时间",
        updatedAT: "更新时间",
        storage: "发行量",
        price: "价格",
        days: "有效天数",
      },
    },
    wen_change_nft_creators: {
      name: "NFT创作者",
      fields: {
        id: "编号",
        name: "创作者名称",
        role: "所属角色",
        description: "创作者介绍",
        avatar: "头像",
        "avatar.cover": "头像",
        userId: "用户",
        "wenChangeBlockChainAccount.account": "区块链地址",
      },
    },
    admins: {
      name: "管理员 |||| 管理员列表",
      fields: {
        id: "编号",
        "avatar.cover": "头像",
        username: "名称",
      },
    },
    users: {
      name: "注册用户 |||| 注册用户列表",
      fields: {
        id: "编号",
        "avatar.cover": "头像",
        username: "用户名",
        mobile: "手机",
        nickname: "昵称",
        "wenChangeNftCreator.wenChangeBlockChainAccount.account": "区块链账号",
      },
    },
    products_on_xian_on_sale: {
      name: "闲鱼上架产品 |||| 闲鱼上架产品列表",
      fields: {
        id: "产品ID",
        name: "产品名称",
        lastCheckTime: "价格更新时间",
        shopId: "所属商店",
        productCategoryId: "所属分类",
        nftId: "NFT藏品",
        type: "类型",
        cover: "封面",
        "bookData.isbn": "ISBN",
        title: "产品名称",
        "xian.outer_id": "闲鱼商户ID",
        "xian.product_id": "管家商品ID",
        "xian.price": "闲鱼售价",
        "bookData.newPrice": "孔网当前最低价",
        originUrl: "购买链接",
        "xian.product_status": "闲管家状态",
        detail_images: "详情图",
        categoryId: "分类",
        category: "分类",
        price: "价格",
        needToAdjustLatestPrice: "同步调价",
        description: "描述",
        banners: "轮播",
        profitRate: "利润率",
        currency: "货币",
        brief: "简介",
        tagIds: "标签",
        tags: "标签",
        blockId: "所属板块",
        interestIds: "购买可获权益",
        shopWeight: "店铺权重",
        tagWeight: "标签权重",
        categoryWeight: "分类权重",
        blockWeight: "板块权重",
        "cover.cover": "封面",
        createdAt: "创建时间",
        isPublished: "是否发布",
        storage: "剩余数量",
        updatedAt: "更新时间",
        creeperUrl: "原购买地址",
        productNumber: "产品编号",
      },
    },
    products_off_xian_off_sale: {
      name: "不在闲管家的产品 |||| 不在闲管家的产品",
      fields: {
        id: "产品ID",
        name: "产品名称",
        lastCheckTime: "价格更新时间",
        shopId: "所属商店",
        productCategoryId: "所属分类",
        nftId: "NFT藏品",
        type: "类型",
        cover: "封面",
        "bookData.isbn": "ISBN",
        title: "产品名称",
        "xian.outer_id": "闲鱼商户ID",
        "xian.product_id": "管家商品ID",
        "xian.price": "闲鱼售价",
        "bookData.newPrice": "孔网当前最低价",
        originUrl: "购买链接",
        "xian.product_status": "闲管家状态",
        detail_images: "详情图",
        categoryId: "分类",
        category: "分类",
        price: "价格",
        needToAdjustLatestPrice: "同步调价",
        description: "描述",
        banners: "轮播",
        profitRate: "利润率",
        currency: "货币",
        brief: "简介",
        tagIds: "标签",
        tags: "标签",
        blockId: "所属板块",
        interestIds: "购买可获权益",
        shopWeight: "店铺权重",
        tagWeight: "标签权重",
        categoryWeight: "分类权重",
        blockWeight: "板块权重",
        "cover.cover": "封面",
        createdAt: "创建时间",
        isPublished: "是否发布",
        storage: "剩余数量",
        updatedAt: "更新时间",
        creeperUrl: "原购买地址",
        productNumber: "产品编号",
      },
    },
    products_on_xian_banned: {
      name: "闲鱼禁售产品 |||| 闲鱼禁售产品列表",
      fields: {
        id: "产品ID",
        name: "产品名称",
        "bookData.isbn": "ISBN",
        isbn: "ISBN",
      },
    },
    products: {
      name: "所有产品 |||| 产品列表",
      fields: {
        id: "产品ID",
        name: "产品名称",
        shopId: "所属商店",
        productCategoryId: "所属分类",
        nftId: "NFT藏品",
        type: "类型",
        cover: "封面",
        "bookData.isbn": "ISBN",
        title: "产品名称",
        "xian.outer_id": "闲鱼商户ID",
        "bookData.newPrice": "孔网当前最低价",
        originUrl: "购买链接",
        "xian.product_status": "闲管家状态",
        detail_images: "详情图",
        categoryId: "分类",
        category: "分类",
        price: "价格",
        needToAdjustLatestPrice: "同步调价",
        description: "描述",
        banners: "轮播",
        profitRate: "利润率",
        currency: "货币",
        brief: "简介",
        tagIds: "标签",
        tags: "标签",
        blockId: "所属板块",
        interestIds: "购买可获权益",
        shopWeight: "店铺权重",
        tagWeight: "标签权重",
        categoryWeight: "分类权重",
        blockWeight: "板块权重",
        "cover.cover": "封面",
        createdAt: "创建时间",
        isPublished: "是否发布",
        storage: "剩余数量",
        updatedAt: "更新时间",
        creeperUrl: "原购买地址",
        productNumber: "产品编号",
      },
      tabs: {
        image: "Image",
        details: "Details",
        description: "Description",
        reviews: "Reviews",
      },
      filters: {
        categories: "Categories",
        stock: "Stock",
        no_stock: "Out of stock",
        low_stock: "1 - 9 items",
        average_stock: "10 - 49 items",
        enough_stock: "50 items & more",
        sales: "Sales",
        best_sellers: "Best sellers",
        average_sellers: "Average",
        low_sellers: "Low",
        never_sold: "Never sold",
      },
    },
    shops: {
      name: "店铺 |||| 店铺列表",
      fields: {
        id: "店铺ID",
        name: "店铺名称",
        phone: "店铺电话",
        type: "类型",
        description: "描述",
        cover: "封面",
        logo: "LOGO",
        interestIds: "绑定的权益",
        interest: "绑定的权益",
        clerk: "绑定的权益",
        clerkIds: "店员",
        userId: "店铺主",
        backgroundImage: "背景图",
        "cover.oss_url": "封面",
        "logo.oss_url": "标志",
        blockId: "所属板块",
        blockWeight: "板块权重",
      },
    },
    apps: {
      name: "应用 |||| 应用列表",
      fields: {
        id: "应用ID",
        appName: "应用名称",
        appCode: "应用编码",
        title: "应用标题",
        description: "应用描述",
        cover: "封面",
        domain: "域名",
        logo: "LOGO",
        slogan: "应用标语",
        phone: "应用电话",
        onCurrent: "是否当前应用",
        default: "当前",
        openModules: "开放模块",
      },
    },

    reviews: {
      name: "Review |||| Reviews",
      amount: "1 review |||| %{smart_count} reviews",
      relative_to_poster: "Review on poster",
      detail: "Review detail",
      fields: {
        customer_id: "Customer",
        command_id: "Order",
        product_id: "Product",
        date_gte: "Posted since",
        date_lte: "Posted before",
        date: "Date",
        comment: "Comment",
        rating: "Rating",
      },
      action: {
        accept: "Accept",
        reject: "Reject",
      },
      notification: {
        approved_success: "Review approved",
        approved_error: "Error: Review not approved",
        rejected_success: "Review rejected",
        rejected_error: "Error: Review not rejected",
      },
    },
    segments: {
      name: "Segment |||| Segments",
      fields: {
        customers: "Customers",
        name: "Name",
      },
      data: {
        compulsive: "Compulsive",
        collector: "Collector",
        ordered_once: "Ordered once",
        regular: "Regular",
        returns: "Returns",
        reviewer: "Reviewer",
      },
    },
  },
};

export default customChineseMessages;
