// enum

// set of fixed string literal : ek jaigai rakhe

// enum is used as type or value. Declaration syntax is slightly difference from others type

// In typeScript there are 3 types of enum: numeric, string, heterogenous

// numeric enum: typescript uses numeric enum bu default 
// enum হলো TypeScript এর একটা feature যেটা automatically 0, 1, 2, 3 এর মতো সংখ্যা assign করে এবং সেগুলোকে readable নামে ব্যবহার করতে দেয়। 
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up);    // 0
console.log(Direction.Right); // 3

// এখানে ⬆️ TypeScript যখন numeric enum পায় তখন নিজে নিজে index দিয়ে value সেট করে:

// আবার Custom value ও দেয়া যায়
enum Status {
  Success = 1,
  Failed = 5,
  Pending = 10
}

console.log(Status.Failed); // 5


// string enum:String enum এ প্রতিটি মানকে string হিসেবে define করতে হয়।
enum UserRoles {
    Admin = "Admin", //here is the difference using '=' not ':'
    Editor= "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRoles) =>{
    if (role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    } else return false;
}


console.log(canEdit(UserRoles.Admin));

// in this use case we can use as type as well as value


// ➤ সুবিধা
// Debugging সহজ হয় (value string থাকে, number না)
// Meaningful value পাওয়া যায়

// heterogenous enum:String ও Number একসাথে রাখা যায়, কিন্তু recommend না।
// (Avoid করা ভালো)

enum Mix {
  Yes = "YES",
  No = 0
}

// numeric enum er ক্ষেত্রে automatically reverse mapping করে।
enum Role {
  Admin = 1,
  User,
}

console.log(Role.Admin); // 1
console.log(Role[1]);    // "Admin"

// String enum এ reverse mapping কাজ করে না।




// Type safety বেশি
// Autocomplete support
// Magic string/number avoid করা যায়
// Switch-case logic খুব clean হয়
// আমরা (.) notation দিয়ে value access করতে পারি
