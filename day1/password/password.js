function obfuscate(password)
{
  var password = password.toString();
  var output = password.replace(/a/g, 4).replace(/e/g, 3).replace(/o/g, 0).replace(/l/g, 1);


  return output;
}


console.log(obfuscate(process.argv[2]));

/*
a = 4
e = 3
o = 0
l = 1*/