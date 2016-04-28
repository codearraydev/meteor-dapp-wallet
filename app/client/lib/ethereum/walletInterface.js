Session.setDefault('network', false);

// MAIN-NET CONTRACT ADDRESS
var mainNetAddress = '0x5923cE93CD740004c3C0a548f619dd10aa290E56'; 
var testNetAddress = '0x'; // morden testnet

walletInterface = [{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}];
WalletContract = web3.eth.contract(walletInterface);

walletABI = "0x6060604052600261010860005055604051611b51380380611b51833981016040528080518201919060200180519060200190919080519060200190919050505b805b83835b600060018351016001600050819055503373ffffffffffffffffffffffffffffffffffffffff16600260005060016101008110156100025790900160005b5081905550600161010260005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081905550600090505b825181101561016e5782818151811015610002579060200190602002015173ffffffffffffffffffffffffffffffffffffffff166002600050826002016101008110156100025790900160005b508190555080600201610102600050600085848151811015610002579060200190602002015173ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055505b80600101905080506100c2565b816000600050819055505b505050806101056000508190555061018f6101ad565b610107600050819055505b505b505050611992806101bf6000396000f35b600062015180420490506101bc565b9056606060405236156100f8576000357c010000000000000000000000000000000000000000000000000000000090048063173825d9146101605780632f54bf6e146101785780634123cb6b146101a457806352375093146101c757806354fd4d50146101ea5780635c52c2f51461020d578063659010e71461021c5780637065cb481461023f578063746c917114610257578063797af6271461027a578063b20d30a9146102a6578063b61d27f6146102be578063b75c7dc614610307578063ba51a6df1461031f578063c2cf732614610337578063cbf0b0c01461036c578063f00d4b5d14610384578063f1736d86146103a5576100f8565b61015e5b600034111561015b577fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b5b565b005b61017660048080359060200190919050506107c4565b005b61018e60048080359060200190919050506109a5565b6040518082815260200191505060405180910390f35b6101b16004805050610a91565b6040518082815260200191505060405180910390f35b6101d46004805050610b38565b6040518082815260200191505060405180910390f35b6101f76004805050610b42565b6040518082815260200191505060405180910390f35b61021a6004805050610adf565b005b6102296004805050610b2e565b6040518082815260200191505060405180910390f35b610255600480803590602001909190505061066e565b005b6102646004805050610a88565b6040518082815260200191505060405180910390f35b6102906004808035906020019091905050610f0e565b6040518082815260200191505060405180910390f35b6102bc6004808035906020019091905050610a9a565b005b6102f160048080359060200190919080359060200190919080359060200190820180359060200191909192905050610b9e565b6040518082815260200191505060405180910390f35b61031d60048080359060200190919050506103c8565b005b610335600480803590602001909190505061090f565b005b61035660048080359060200190919080359060200190919050506109e7565b6040518082815260200191505060405180910390f35b6103826004808035906020019091905050610b4c565b005b6103a360048080359060200190919080359060200190919050506104ca565b005b6103b26004805050610b24565b6040518082815260200191505060405180910390f35b60006000600061010260005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549250600083141561040f576104c4565b8260020a91506101036000506000858152602001908152602001600020600050905060008282600101600050541611156104c3578060000160008181505480929190600101919050555081816001016000828282505403925050819055507fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b3385604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b5b50505050565b600060003643604051808484808284378201915050828152602001935050505060405180910390206104fb816112db565b1561066757610509836109a5565b156105145750610669565b61010260005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054915060008214156105565750610669565b61055e611777565b8273ffffffffffffffffffffffffffffffffffffffff166002600050836101008110156100025790900160005b5081905550600061010260005060008673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055508161010260005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055507fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c8484604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b505b505050565b600036436040518084848082843782019150508281526020019350505050604051809103902061069d816112db565b156107bf576106ab826109a5565b156106b657506107c1565b6106be611777565b60fa6001600050541015156106d7576106d561153d565b505b60fa6001600050541015156106ec57506107c1565b60016000818150548092919060010191905055508173ffffffffffffffffffffffffffffffffffffffff1660026000506001600050546101008110156100025790900160005b508190555060016000505461010260005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055507f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c382604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b505b50565b600060003643604051808484808284378201915050828152602001935050505060405180910390206107f5816112db565b156109095761010260005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549150600082141561083c575061090b565b6001600160005054036000600050541115610857575061090b565b60006002600050836101008110156100025790900160005b5081905550600061010260005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055506108b2611777565b6108ba61153d565b507f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da83604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b505b5050565b600036436040518084848082843782019150508281526020019350505050604051809103902061093e816112db565b156109a05760016000505482111561095657506109a2565b81600060005081905550610968611777565b7facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da826040518082815260200191505060405180910390a15b505b50565b6000600061010260005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541190506109e2565b919050565b60006000600060006101036000506000878152602001908152602001600020600050925061010260005060008673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505491506000821415610a505760009350610a7f565b8160020a90506000818460010160005054161415610a755760009350610a7f56610a7e565b60019350610a7f565b5b50505092915050565b60006000505481565b60016000505481565b6000364360405180848480828437820191505082815260200193505050506040518091039020610ac9816112db565b15610ada5781610105600050819055505b505b50565b6000364360405180848480828437820191505082815260200193505050506040518091039020610b0e816112db565b15610b20576000610106600050819055505b505b565b6101056000505481565b6101066000505481565b6101076000505481565b6101086000505481565b6000364360405180848480828437820191505082815260200193505050506040518091039020610b7b816112db565b15610b99578173ffffffffffffffffffffffffffffffffffffffff16ff5b505b50565b6000610ba9336109a5565b15610f0557610bb7846116d7565b15610ca0577f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd0043385878686604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018060200182810382528484828181526020019250808284378201915050965050505050505060405180910390a18473ffffffffffffffffffffffffffffffffffffffff168484846040518083838082843782019150509250505060006040518083038185876185025a03f1925050505060006001029050610f06565b600036436040518084848082843782019150508281526020019350505050604051809103902090508050610cd381610f0e565b158015610d3357506000610109600050600083815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610f045784610109600050600083815260200190815260200160002060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555083610109600050600083815260200190815260200160002060005060010160005081905550828261010960005060008481526020019081526020016000206000506002016000509190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e0857803560ff1916838001178555610e39565b82800160010185558215610e39579182015b82811115610e38578235826000505591602001919060010190610e1a565b5b509050610e649190610e46565b80821115610e605760008181506000905550600101610e46565b5090565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32813386888787604051808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a15b5b5b949350505050565b600081610f1a816112db565b156112d4576000610109600050600085815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156112d357610109600050600084815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610109600050600085815260200190815260200160002060005060010160005054610109600050600086815260200190815260200160002060005060020160005060405180828054600181600116156101000203166002900480156110765780601f1061104b57610100808354040283529160200191611076565b820191906000526020600020905b81548152906001019060200180831161105957829003601f168201915b505091505060006040518083038185876185025a03f192505050507fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a3384610109600050600087815260200190815260200160002060005060010160005054610109600050600088815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166101096000506000898152602001908152602001600020600050600201600050604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156112005780601f106111d557610100808354040283529160200191611200565b820191906000526020600020905b8154815290600101906020018083116111e357829003601f168201915b5050965050505050505060405180910390a1610109600050600084815260200190815260200160002060006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000506000905560028201600050805460018160011615610100020316600290046000825580601f1061128957506112c6565b601f0160209004906000526020600020908101906112c591906112a7565b808211156112c157600081815060009055506001016112a7565b5090565b5b50505060019150506112d6565b5b505b919050565b600060006000600061010260005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549250600083141561132457611535565b610103600050600086815260200190815260200160002060005091506000826000016000505414156113fd57600060005054826000016000508190555060008260010160005081905550610104600050805480919060010190908154818355818115116113c3578183600052602060002091820191016113c291906113a4565b808211156113be57600081815060009055506001016113a4565b5090565b5b5050508260020160005081905550846101046000508360020160005054815481101561000257906000526020600020900160005b50819055505b8260020a90506000818360010160005054161415611534577fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda3386604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001826000016000505411151561150757610104600050610103600050600087815260200190815260200160002060005060020160005054815481101561000257906000526020600020900160005b50600090556101036000506000868152602001908152602001600020600060008201600050600090556001820160005060009055600282016000506000905550506001935061153556611533565b816000016000818150548092919060019003919050555080826001016000828282505417925050819055505b5b5b505050919050565b60006000600190505b6001600050548110156116d2575b60016000505481108015611580575060006002600050826101008110156100025790900160005b505414155b15611592578080600101915050611554565b5b60016001600050541180156115c45750600060026000506001600050546101008110156100025790900160005b5054145b156115e357600160008181505480929190600190039190505550611593565b600160005054811080156116145750600060026000506001600050546101008110156100025790900160005b505414155b8015611637575060006002600050826101008110156100025790900160005b5054145b156116cd5760026000506001600050546101008110156100025790900160005b50546002600050826101008110156100025790900160005b50819055508061010260005060006002600050846101008110156100025790900160005b5054815260200190815260200160002060005081905550600060026000506001600050546101008110156100025790900160005b50819055505b611546565b5b5090565b60006116e2336109a5565b1561177157610107600050546116f6611980565b111561171b57600061010660005081905550611710611980565b610107600050819055505b610106600050548261010660005054011015801561174757506101056000505482610106600050540111155b15611768578161010660008282825054019250508190555060019050611772565b60009050611772565b5b919050565b60006000610104600050805490509150600090505b8181101561187857610109600050600061010460005083815481101561000257906000526020600020900160005b5054815260200190815260200160002060006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000506000905560028201600050805460018160011615610100020316600290046000825580601f1061182a5750611867565b601f0160209004906000526020600020908101906118669190611848565b808211156118625760008181506000905550600101611848565b5090565b5b5050505b806001019050805061178c565b611880611885565b5b5050565b60006000610104600050805490509150600090505b8181101561193857600060010261010460005082815481101561000257906000526020600020900160005b505414151561192a57610103600050600061010460005083815481101561000257906000526020600020900160005b50548152602001908152602001600020600060008201600050600090556001820160005060009055600282016000506000905550505b5b806001019050805061189a565b61010460005080546000825590600052602060002090810190611979919061195b565b80821115611975576000818150600090555060010161195b565b5090565b5b505b5050565b6000620151804204905061198f565b90560000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000052b7d2dcc80cd2e400000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000008a9e383a8f3987b5cca6025ccc583acfddf05c3b",
walletStubABI = '6060604052600261010860005055604051611b51380380611b51833981016040528080518201919060200180519060200190919080519060200190919050505b805b83835b600060018351016001600050819055503373ffffffffffffffffffffffffffffffffffffffff16600260005060016101008110156100025790900160005b5081905550600161010260005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081905550600090505b825181101561016e5782818151811015610002579060200190602002015173ffffffffffffffffffffffffffffffffffffffff166002600050826002016101008110156100025790900160005b508190555080600201610102600050600085848151811015610002579060200190602002015173ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055505b80600101905080506100c2565b816000600050819055505b505050806101056000508190555061018f6101ad565b610107600050819055505b505b505050611992806101bf6000396000f35b600062015180420490506101bc565b9056606060405236156100f8576000357c010000000000000000000000000000000000000000000000000000000090048063173825d9146101605780632f54bf6e146101785780634123cb6b146101a457806352375093146101c757806354fd4d50146101ea5780635c52c2f51461020d578063659010e71461021c5780637065cb481461023f578063746c917114610257578063797af6271461027a578063b20d30a9146102a6578063b61d27f6146102be578063b75c7dc614610307578063ba51a6df1461031f578063c2cf732614610337578063cbf0b0c01461036c578063f00d4b5d14610384578063f1736d86146103a5576100f8565b61015e5b600034111561015b577fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b5b565b005b61017660048080359060200190919050506107c4565b005b61018e60048080359060200190919050506109a5565b6040518082815260200191505060405180910390f35b6101b16004805050610a91565b6040518082815260200191505060405180910390f35b6101d46004805050610b38565b6040518082815260200191505060405180910390f35b6101f76004805050610b42565b6040518082815260200191505060405180910390f35b61021a6004805050610adf565b005b6102296004805050610b2e565b6040518082815260200191505060405180910390f35b610255600480803590602001909190505061066e565b005b6102646004805050610a88565b6040518082815260200191505060405180910390f35b6102906004808035906020019091905050610f0e565b6040518082815260200191505060405180910390f35b6102bc6004808035906020019091905050610a9a565b005b6102f160048080359060200190919080359060200190919080359060200190820180359060200191909192905050610b9e565b6040518082815260200191505060405180910390f35b61031d60048080359060200190919050506103c8565b005b610335600480803590602001909190505061090f565b005b61035660048080359060200190919080359060200190919050506109e7565b6040518082815260200191505060405180910390f35b6103826004808035906020019091905050610b4c565b005b6103a360048080359060200190919080359060200190919050506104ca565b005b6103b26004805050610b24565b6040518082815260200191505060405180910390f35b60006000600061010260005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549250600083141561040f576104c4565b8260020a91506101036000506000858152602001908152602001600020600050905060008282600101600050541611156104c3578060000160008181505480929190600101919050555081816001016000828282505403925050819055507fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b3385604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b5b50505050565b600060003643604051808484808284378201915050828152602001935050505060405180910390206104fb816112db565b1561066757610509836109a5565b156105145750610669565b61010260005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054915060008214156105565750610669565b61055e611777565b8273ffffffffffffffffffffffffffffffffffffffff166002600050836101008110156100025790900160005b5081905550600061010260005060008673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055508161010260005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055507fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c8484604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b505b505050565b600036436040518084848082843782019150508281526020019350505050604051809103902061069d816112db565b156107bf576106ab826109a5565b156106b657506107c1565b6106be611777565b60fa6001600050541015156106d7576106d561153d565b505b60fa6001600050541015156106ec57506107c1565b60016000818150548092919060010191905055508173ffffffffffffffffffffffffffffffffffffffff1660026000506001600050546101008110156100025790900160005b508190555060016000505461010260005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055507f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c382604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b505b50565b600060003643604051808484808284378201915050828152602001935050505060405180910390206107f5816112db565b156109095761010260005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549150600082141561083c575061090b565b6001600160005054036000600050541115610857575061090b565b60006002600050836101008110156100025790900160005b5081905550600061010260005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055506108b2611777565b6108ba61153d565b507f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da83604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b505b5050565b600036436040518084848082843782019150508281526020019350505050604051809103902061093e816112db565b156109a05760016000505482111561095657506109a2565b81600060005081905550610968611777565b7facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da826040518082815260200191505060405180910390a15b505b50565b6000600061010260005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541190506109e2565b919050565b60006000600060006101036000506000878152602001908152602001600020600050925061010260005060008673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505491506000821415610a505760009350610a7f565b8160020a90506000818460010160005054161415610a755760009350610a7f56610a7e565b60019350610a7f565b5b50505092915050565b60006000505481565b60016000505481565b6000364360405180848480828437820191505082815260200193505050506040518091039020610ac9816112db565b15610ada5781610105600050819055505b505b50565b6000364360405180848480828437820191505082815260200193505050506040518091039020610b0e816112db565b15610b20576000610106600050819055505b505b565b6101056000505481565b6101066000505481565b6101076000505481565b6101086000505481565b6000364360405180848480828437820191505082815260200193505050506040518091039020610b7b816112db565b15610b99578173ffffffffffffffffffffffffffffffffffffffff16ff5b505b50565b6000610ba9336109a5565b15610f0557610bb7846116d7565b15610ca0577f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd0043385878686604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018060200182810382528484828181526020019250808284378201915050965050505050505060405180910390a18473ffffffffffffffffffffffffffffffffffffffff168484846040518083838082843782019150509250505060006040518083038185876185025a03f1925050505060006001029050610f06565b600036436040518084848082843782019150508281526020019350505050604051809103902090508050610cd381610f0e565b158015610d3357506000610109600050600083815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610f045784610109600050600083815260200190815260200160002060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555083610109600050600083815260200190815260200160002060005060010160005081905550828261010960005060008481526020019081526020016000206000506002016000509190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e0857803560ff1916838001178555610e39565b82800160010185558215610e39579182015b82811115610e38578235826000505591602001919060010190610e1a565b5b509050610e649190610e46565b80821115610e605760008181506000905550600101610e46565b5090565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32813386888787604051808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a15b5b5b949350505050565b600081610f1a816112db565b156112d4576000610109600050600085815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156112d357610109600050600084815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610109600050600085815260200190815260200160002060005060010160005054610109600050600086815260200190815260200160002060005060020160005060405180828054600181600116156101000203166002900480156110765780601f1061104b57610100808354040283529160200191611076565b820191906000526020600020905b81548152906001019060200180831161105957829003601f168201915b505091505060006040518083038185876185025a03f192505050507fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a3384610109600050600087815260200190815260200160002060005060010160005054610109600050600088815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166101096000506000898152602001908152602001600020600050600201600050604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156112005780601f106111d557610100808354040283529160200191611200565b820191906000526020600020905b8154815290600101906020018083116111e357829003601f168201915b5050965050505050505060405180910390a1610109600050600084815260200190815260200160002060006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000506000905560028201600050805460018160011615610100020316600290046000825580601f1061128957506112c6565b601f0160209004906000526020600020908101906112c591906112a7565b808211156112c157600081815060009055506001016112a7565b5090565b5b50505060019150506112d6565b5b505b919050565b600060006000600061010260005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549250600083141561132457611535565b610103600050600086815260200190815260200160002060005091506000826000016000505414156113fd57600060005054826000016000508190555060008260010160005081905550610104600050805480919060010190908154818355818115116113c3578183600052602060002091820191016113c291906113a4565b808211156113be57600081815060009055506001016113a4565b5090565b5b5050508260020160005081905550846101046000508360020160005054815481101561000257906000526020600020900160005b50819055505b8260020a90506000818360010160005054161415611534577fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda3386604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001826000016000505411151561150757610104600050610103600050600087815260200190815260200160002060005060020160005054815481101561000257906000526020600020900160005b50600090556101036000506000868152602001908152602001600020600060008201600050600090556001820160005060009055600282016000506000905550506001935061153556611533565b816000016000818150548092919060019003919050555080826001016000828282505417925050819055505b5b5b505050919050565b60006000600190505b6001600050548110156116d2575b60016000505481108015611580575060006002600050826101008110156100025790900160005b505414155b15611592578080600101915050611554565b5b60016001600050541180156115c45750600060026000506001600050546101008110156100025790900160005b5054145b156115e357600160008181505480929190600190039190505550611593565b600160005054811080156116145750600060026000506001600050546101008110156100025790900160005b505414155b8015611637575060006002600050826101008110156100025790900160005b5054145b156116cd5760026000506001600050546101008110156100025790900160005b50546002600050826101008110156100025790900160005b50819055508061010260005060006002600050846101008110156100025790900160005b5054815260200190815260200160002060005081905550600060026000506001600050546101008110156100025790900160005b50819055505b611546565b5b5090565b60006116e2336109a5565b1561177157610107600050546116f6611980565b111561171b57600061010660005081905550611710611980565b610107600050819055505b610106600050548261010660005054011015801561174757506101056000505482610106600050540111155b15611768578161010660008282825054019250508190555060019050611772565b60009050611772565b5b919050565b60006000610104600050805490509150600090505b8181101561187857610109600050600061010460005083815481101561000257906000526020600020900160005b5054815260200190815260200160002060006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000506000905560028201600050805460018160011615610100020316600290046000825580601f1061182a5750611867565b601f0160209004906000526020600020908101906118669190611848565b808211156118625760008181506000905550600101611848565b5090565b5b5050505b806001019050805061178c565b611880611885565b5b5050565b60006000610104600050805490509150600090505b8181101561193857600060010261010460005082815481101561000257906000526020600020900160005b505414151561192a57610103600050600061010460005083815481101561000257906000526020600020900160005b50548152602001908152602001600020600060008201600050600090556001820160005060009055600282016000506000905550505b5b806001019050805061189a565b61010460005080546000825590600052602060002090810190611979919061195b565b80821115611975576000818150600090555060010161195b565b5090565b5b505b5050565b6000620151804204905061198f565b9056';//'0x606060405260026101086000505560405161015638038061015683398101604052805160805160a051919092019190808383815160019081018155600090600160a060020a0332169060029060038390559183525061010260205260408220555b82518110156100eb57828181518110156100025790602001906020020151600160a060020a03166002600050826002016101008110156100025790900160005081905550806002016101026000506000858481518110156100025790602001906020020151600160a060020a0316815260200190815260200160002060005081905550600101610060565b81600060005081905550505050806101056000508190555061010f62015180420490565b61010755505050506031806101256000396000f3003660008037602060003660003473cafecafecafecafecafecafecafecafecafecafe61235a5a03f21560015760206000f3';
originalContractAddress = mainNetAddress;

// CONTRACT VERSIONS
contractVersions = [
    // 0 foundation
    {
        original: '971ac1efe62de02ab7497cf2cad2b93ce990a8d11c3a544943baf807e42eab7d',
        stub: false,
        // version 0 with tx.origin
        address: '0x4efc6389b88569a375668b7b3bd4a9b6c8f4a942'
    },
    // 1 better daily limit
    { 
        original: '8207780d6fb31803373aff97360562231187ebb0da6b4678eeb68ceb16897509',
        stub: '',
        address: '0x273930d21e01ee25e4c219b63259d214872220a2'
    }
];


// CHECK FOR NETWORK
web3.eth.getBlock(0, function(e, res){
    if(!e){
        switch(res.hash) {
            case '0x09': 
                Session.set('network', 'test');
                break;
            case '0x2fe75cf9ba10cb1105e1750d872911e75365ba24fdd5db7f099445c901fea895':
                Session.set('network', 'main');
                break;
            default:
                Session.set('network', 'private');
        }
    }
});


/**
Replaces the address in the stub code "walletStubABI" variable.

@method replaceStubAddress
*/
var replaceStubAddress = function(address) {
    walletStubABI = walletStubABI.replace('cafecafecafecafecafecafecafecafecafecafe', address.replace('0x',''));
    // set this address as used address
    originalContractAddress = address;
    return walletStubABI;
};

/**
Deploys testnet wallet, when on other orig wallet was found

@method deployTestnetWallet
*/
var deployTestnetWallet = function() {
    var account = web3.eth.accounts[0];

    EthElements.Modal.question({
        text: new Spacebars.SafeString(TAPi18n.__('wallet.modals.testnetWallet.walletNeedsDeployment', {account: account})),
        cancel: true,
        ok: function() {

            // show loading
            EthElements.Modal.show('views_modals_loading', {closeable: false});

            // deploy testnet wallet
            WalletContract.new([],'','', {
                from: account,
                data: walletABI,
                gas: 2000000,
            }, function (e, contract) {
                if(!e) {
                    if(contract.address) {
                        console.log('Contract created at: ', contract.address);

                        LocalStore.set('expanse_testnetWalletContractAddress', contract.address);
                        replaceStubAddress(contract.address);

                        EthElements.Modal.question({
                            text: new Spacebars.SafeString(TAPi18n.__('wallet.modals.testnetWallet.testnetWalletDeployed', {address: web3.toChecksumAddress(contract.address)})),
                            ok: true
                        });

                    } else {
                        console.log('Contract creation transaction hash: ', contract.transactionHash);
                    }

                } else {
                    GlobalNotification.error({
                        content: e.message,
                        duration: 8
                    });

                    EthElements.Modal.hide();
                }
            });
        }
    },{
        closeable: false
    });

}

/**
Checks the main and testnet address

@method checkCodeOnAddress
*/
var checkCodeOnAddress = function(address, callback) {
    // see if the original wallet is deployed, if not re-deploy on testnet
    web3.eth.getCode(address, function(e, code) {
        if(!e) {
            if(code.length > 2) {
                replaceStubAddress(address);

                if(address === mainNetAddress) {
                    console.log('Use Main-net wallet as code base for stubs on address: ', address);
                }
                if(address === testNetAddress) {
                    console.log('Use Test-net wallet as code base for stubs on address: ', address);
                }
            
            // use testnet or private net address, or re-deploy
            } else {

                callback();                
            }
        } else {
            GlobalNotification.error({
                content: e.message,
                duration: 8
            });
        }
    });
}


/**
Checks if the original wallet exists, if not deploys it

@method checkForOriginalWallet
*/
checkForOriginalWallet = function() {
    return;

    var enoughBalance = false;
    _.each(_.pluck(EthAccounts.find({}).fetch(), 'balance'), function(bal){
        if(new BigNumber(bal, '10').gt(1000000000000000000)) enoughBalance = true;
    });

    // Only check for the wallet if user has enough funds to deploy it
    if (enoughBalance) {     
        // see if the original wallet is deployed, if not re-deploy on testnet
        checkCodeOnAddress(mainNetAddress, function() {
            checkCodeOnAddress(testNetAddress, function() {
                var privateNetAddress = LocalStore.get('expanse_testnetWalletContractAddress');

                if(privateNetAddress)
                    web3.eth.getCode(privateNetAddress, function(e, code) {
                        if(!e) {
                            if(code.length > 2) {
                                replaceStubAddress(privateNetAddress);
                                console.log('Use private-net wallet as code base for stubs on address: ', privateNetAddress);
                            } else {
                                deployTestnetWallet();
                            }
                        } else {
                            GlobalNotification.error({
                                content: e.message,
                                duration: 8
                            });
                        }
                    });
                else
                    deployTestnetWallet();
            });
        });
    } 
}

