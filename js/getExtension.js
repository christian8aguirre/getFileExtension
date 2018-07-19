function getFileExtension(file) {
    if(file.lastIndexOf(".") === -1){
        return "NOT VALID";
    } else {
        let newFile = file.split(".");
        last = newFile.slice(-1);
        return last[0];
    }
}


console.assert(getFileExtension("logos.sketch") === "sketch")
console.assert(getFileExtension("avatar.png") === "png")
console.assert(getFileExtension("noextension") === "NOT VALID")