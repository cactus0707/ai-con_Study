var family = {
    "adress" : "Seoul",
    members: {},
    
    addFamily: function(age, name, role){
        this.members[role] = {
            age: age,
            name: name
        };
    },

    getHeadcount: function(){
        return Object.keys(this.members).length;
    }
};


family.addFamily(30, 'chloe','aunt',);
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

var printMembers = function(){
    var members = family.members;

    for (role in members){ // 포인 문으로 멤버스의 하나의 요소(키값에따라 )마다 순회.
        console.log('role => ' + role + ', name =>' + members[role].name + ', age =>' + members[role].age);
    }
};

printMembers();

var members= family.members;
members['nephew'] = {age: 3, name: 'hyun'};
members.niece = {age: 5, name: 'lyn'};

delete members.aunt;
delete members['dog']; // .방식이 선호됨.

printMembers();