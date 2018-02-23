function printBadges(name) {
 for (let i = 0; i < name.length; i++) {
   console.log('Welcome ${name}! You are employee #${i - 1}.')
 }
 return name;
}
