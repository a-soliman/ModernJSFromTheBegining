// basic structure

/* 
    Factory PATTERN 
    -----------------
*/
function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type == 'simple') {
            member = new SimpleMembership(name);
        } 
        else if ( type == 'standered' ) {
            member = StanderedMembership(name);
        }
        else if ( type == 'super' ) {
            member = SuperMembership(name);
        }

        member.type = type;
        
        member.define = function() {
            console.log(`${this.name}, ${this.type}: ${this.cost}`);
        };

        return member;
    };
}

function SimpleMembership(name) {
    this.name = name;
    this.cost = '$5';
}

function StanderedMembership(name) {
    this.name = name;
    this.cost = '$15';
}

function SuperMembership(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];

const factory = new MemberFactory();

members.push(factory.createMember('John doe', 'simple'));

members.forEach((member) => {
    member.define();
});