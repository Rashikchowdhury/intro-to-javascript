// task 1: Console log the secondary school location of Sophia.
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
};

const secondarySchoolLocation = data.Sophia.study[1].secondary[1].location;
console.log(secondarySchoolLocation);
