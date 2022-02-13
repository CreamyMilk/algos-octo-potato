from itertools import product
for slip in [ i for i in product("WDL",repeat=int(input("Enter the number of Games: ")))]: print(slip)