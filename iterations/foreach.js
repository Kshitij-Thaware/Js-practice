const coding = ["js", "ruby", "java", "C#", "XML", "cpp"]

// coding.forEach(  function (item) {
//     console.log(item);
// }  )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function prin(item) {
//     console.log(item);
// }

// coding.forEach(prin)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "python"
    }
]

mycoding.forEach((item) => {
    console.log(item.languagename);
})