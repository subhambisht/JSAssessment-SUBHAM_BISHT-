/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// creating a variable to hold NFT's
const NFTs = []
// this function will take in some values as parameters,
// creating an NFT object using the parameters passed to it for its metadata, 
// and storing it in the variable that is made above.
function mintNFT (name, hair_colour, attire, accessories) 
{
    const NFT = {
        "Name": name,
        "HairColour": hair_colour,
        "Attire": attire,
        "Accessories": accessories
    } 
    NFTs.push(NFT);
    console.log("Generated(Minted For):- "+name);
}
// creating a "loop" that will go through an "array" of NFT's
// and printing their metadata with console.log()
function listNFTs () {
for(let s=0; s< NFTs.length; s++)
    {
        console.log("\nID:-  "+ (s+1));
        console.log("Name: "+ NFTs[s].Name);
        console.log("HairColour: "+ NFTs[s].HairColour);
        console.log("Attire: "+ NFTs[s].Attire);
        console.log("Accessories: "+ NFTs[s].Accessories);
    }
}
// printing the total number of NFTs minted to the console
function getTotalSupply() 
{
    console.log("\nTotal number of generated NFTs are as follows:- "+ NFTs.length);
}
// calling functions below:-
mintNFT("Subham","Black","Indian","Watch");
mintNFT("Vivek","Blue","Indian","Gold Chain");
mintNFT("Sam","Gray","Western","Silver Chain");
mintNFT("Hardik","Black","Indian","Gold Rings");
mintNFT("Abhay","Red","Western","Bracelet");
listNFTs();
getTotalSupply();
