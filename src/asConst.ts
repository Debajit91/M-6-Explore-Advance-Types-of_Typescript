// as const assertion

// ✔ Zero runtime overhead

// Enum compile হলে JS এ বড় object তৈরি হয়,
// কিন্তু as const object → ঠিক যেটা লিখা হয় সেইটাই থাকে।

// enum UserRoles {
//     Admin = "Admin", 
//     Editor= "Editor",
//     Viewer = "Viewer"
// }

const UserRoles =  {
    Admin : "ADMIN", 
    Editor: "EDITOR",
    Viewer: "VIEWER"
} as const;

// console.log(UserRoles.Admin);

// as const ব্যবহার করার কারণে বিহাইন্ড দ্যা সিন প্রপার্টি গুলো readonly হয়ে যায়। যেকারণে enum দিয়ে লিখলেও একই কাজ হয়। তবে as const এর ক্ষেত্রে আরও strict হয়।

// UserRoles.Admin = 'Mon'

// যখন আমরা enum ব্যবহার করেছিলাম তখন role:UserRoles define করতে পেরেছিলাম। কিন্তু এখন as const use করার কারণে error দিচ্ছে- 'UserRoles' refers to a value, but is being used as a type here. Did you mean 'typeof UserRoles'? মানে এখন UserRoles আর type নয়, value.

/*enum আসলে type + value দুটোই তৈরি করে। এখানে:
/   UserRoles → type
/   UserRoles → runtime value (enum object)
/   এক বোতলে দুই জিনিস।
*/   

// তাই যখন as const ব্যবহার করব তখন দুইটা operator use করতে হবে।
// 1. typeof
// 2. keyof
// যখন আমরা typeof ব্যবহার করি তখন behind the scene typescript setar ekta type তৈরী করে নেয়।
// আর keyof key গুলোকে নিয়ে union type create kore.


// type UserRoleType = typeof UserRoles[keyof typeof UserRoles] >>> যদি value গুলোকে role এর টাইপ হিসেবে সেট করতে চাই।

// আর যদি শুধু key গুলোকে role এর টাইপ হিসেবে সেট করতে চাই।   
//                       ⬇️
const canEdit = (role: keyof typeof UserRoles) =>{
    if (role === 'Admin' || role === 'Editor'){
        return true;
    } else return false;
}


console.log(canEdit('Admin'));