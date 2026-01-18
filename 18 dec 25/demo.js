function remove(key, str) {
  for (let i = 0; i < str.length; i++) {
    if (key == str[i]) return true;
  }
  return false;
}

function removeVowels(str) {
  let ans = "";
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (remove(str[i], vowels)) continue;
    else ans += str[i];
  }
  console.log(ans);
}
let names = "Rohit Sisodiya";
removeVowels(names);
