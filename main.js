//  GET DOM ELEMENT
let childOpt = document.getElementById("contentDiv");
let childOpt2 = document.getElementById("contentDiv2");

// CREATE LIST OF CONTENT
let cart = [
    btc = ["btc-currency", "btc-cards", "btc-iTunes", "btc-sell", "btc-buy"],
    eth = ["eth-currency", "eth-cards", "eth-iTunes", "eth-sell", "eth-buy"],
    ltc = ["ltc-currency", "ltc-cards", "ltc-iTunes", "ltc-sell", "ltc-buy"]
];

// CREATE AN OBJECT CALLED DATA1 TO STORE A LIST OF ALL DATA RELATED TO THE "CART"
let _data1 = {
    currency: [
        btc = ["btc-US$", "btc-ERUO", "btc-POUNDS", "btc-YEN", "btc-Naira"],
        eth = ["eth-US$", "eth-ERUO", "eth-POUNDS", "eth-YEN", "eth-Naira"],
        ltc = ["ltc-US$", "ltc-ERUO", "ltc-POUNDS", "ltc-YEN", "ltc-Naira"],
    ],

    cards: [
        btc = ["btc-card1", "btc-card2", "btc-card3", "btc-card3", "btc-card4"],
        eth = ["eth-card1", "eth-card2", "eth-card3", "eth-card3", "eth-card4"],
        ltc = ["ltc-card1", "ltc-card2", "ltc-card3", "ltc-card3", "ltc-card4"],
    ],

    iTunes: [
        btc = ["btc-iTunes1", "btc-iTunes2", "btc-iTunes3", "btc-iTunes3", "btc-iTunes4"],
        eth = ["eth-iTunes1", "eth-iTunes2", "eth-iTunes3", "eth-iTunes3", "eth-iTunes4"],
        ltc = ["ltc-iTunes1", "ltc-iTunes2", "ltc-iTunes3", "ltc-iTunes3", "ltc-iTunes4"],
    ],
    
    sell: [
        btc = ["btc-sell1", "btc-sell2", "btc-sell3", "btc-sell3", "btc-sell4"],
        eth = ["eth-sell1", "eth-sell2", "eth-sell3", "eth-sell3", "eth-sell4"],
        ltc = ["ltc-sell1", "ltc-sell2", "ltc-sell3", "ltc-sell3", "ltc-sell4"],
    ],

    buy: [
        btc = ["btc-buy1", "btc-buy2", "btc-buy3", "btc-buy3", "btc-buy4"],
        eth = ["eth-buy1", "eth-buy2", "eth-buy3", "eth-buy3", "eth-buy4"],
        ltc = ["ltc-buy1", "ltc-buy2", "ltc-buy3", "ltc-buy3", "ltc-buy4"],
    ],

    // THIS IS ALL THE METHOD THIS DATA1 NEEDS
    method: [
        function createCurrency(val) {

            childOpt2.innerHTML = "";

            _data1.currency[val].forEach(elem => {
                let newOpt = document.createElement("option");

                newOpt.innerHTML = elem;

                childOpt2.append(newOpt);

            })
        },

        function createCards(val) {

            childOpt2.innerHTML = "";

            _data1.cards[val].forEach(elem => {
                let newOpt = document.createElement("option");

                newOpt.innerHTML = elem;

                childOpt2.append(newOpt);

            })
        },

        function createITunes(val) {

            childOpt2.innerHTML = "";

            _data1.iTunes[val].forEach(elem => {
                let newOpt = document.createElement("option");

                newOpt.innerHTML = elem;

                childOpt2.append(newOpt);

            })
        },

        function createSell(val) {

            childOpt2.innerHTML = "";

            _data1.sell[val].forEach(elem => {
                let newOpt = document.createElement("option");

                newOpt.innerHTML = elem;

                childOpt2.append(newOpt);

            })
        },

        function createBuy(val) {

            childOpt2.innerHTML = "";

            _data1.buy[val].forEach(elem => {
                let newOpt = document.createElement("option");

                newOpt.innerHTML = elem;

                childOpt2.append(newOpt);

            })
        }
    ]
};

// GET THE SELECTED VALUE FROM THE DOM
function getSelectValue() {

    let selectedValue = document.getElementById("parentDiv").value;

    switch (selectedValue.toLowerCase()) {
        case "btc":
            createSub(0);
            _data1.method[0](0)
            break;
        case "eth":
            createSub(1);
            _data1.method[0](1)

            break;
        case "ltc":
            createSub(2);
            _data1.method[0](2)
            break;
        default:
            console.log("NO VALUE WAS SELECTED");
            break;
    };
};

// GRT THE SELECTED VALUE FROM DATA1
function getSelectValue2() {

    let selectedValue = document.getElementById("contentDiv").value;

    switch (selectedValue.toLowerCase()) {
        case "btc-currency":
            _data1.method[0](0);
            break;
        case "eth-currency":
            _data1.method[0](1);

            break;
        case "ltc-currency":
            _data1.method[0](2);
            break;
        case "btc-cards":
            _data1.method[1](0)
            break;
        case "eth-cards":
            _data1.method[1](1)

            break;
        case "ltc-cards":
            _data1.method[1](2)
            break;
        case "btc-itunes":
            _data1.method[2](0)
            break;
        case "eth-itunes":
            _data1.method[2](1)

            break;
        case "ltc-itunes":
            _data1.method[2](2)
            break;
        case "btc-sell":
            _data1.method[3](0)
            break;
        case "eth-sell":
            _data1.method[3](1)

            break;
        case "ltc-sell":
            _data1.method[3](2)
            break;
        case "btc-buy":
            _data1.method[4](0)
            break;
        case "eth-buy":
            _data1.method[4](1)

            break;
        case "ltc-buy":
            _data1.method[4](2)
            break;
        default:
            console.log("NO VALUE WAS SELECTED");
            break;
    }
};

// CR4EATE THE LIST OF IN THE CART
function createSub(val) {

    childOpt.innerHTML = "";

    cart[val].forEach(elem => {
        let newOpt = document.createElement("option");

        newOpt.innerHTML = elem;

        childOpt.append(newOpt);

    })
};

// IT BEGINS
createSub(0);
_data1.method[0](0);