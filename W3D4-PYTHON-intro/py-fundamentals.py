# this is a comment!
"""
this is a multi line
comment!!!!
"""

# VARIABLES
# PRIMITIVE
my_name = "bob"
my_number = 13
my_float = 3.14
is_admin = True

print("Hello World " + str(my_number))

#JS console.log(`this is a var ${varName}`)
print(f"hello {my_number}")





# COMPOSITE
# JS Arrays
# PY Lists
#          0   1  2  3  4
my_nums = [11,22,33,44,55]

print(my_nums[0])
# remove the last element from a list
my_nums.pop()
print(my_nums)

# add an element to the end
# JS array.push()
# py list.append()
my_nums.append(my_name)

# get the length of this list
print(len(my_nums))


# JS Objects
# PY Dictionary
# key - value
# they are comma separated
# all keys are 'strings'

first_pokemon = {
    "name" : 'Kirby',
    'power': 90001,
    'is_pokemon': True,
    'hobbies': ['⛷️', '🍉', '🏇']
}

# print 'Kirby'
print(first_pokemon['name'])
# show the first hobby of the dict.
print(first_pokemon["hobbies"][0])

# functions
# a set of instructions
def greeting(some_name):
    # conditional
    if (some_name == "Vincent"):
        print("hey it's our awesome TA!!")
    elif (some_name == "bob"):
        print("yooo bob!")
    else:
        print("hello person " + some_name)
    # return 33

print(greeting("boasdasdasdsb"))

# how do i loop in PYTHON?
# for _interator_ in _collection_:

# range()  - returns a sequence of numbers
# range(start, stop, end)
# start - inclusive optional - default is 0
# stop - exclusive REQUIRED
# step - optional, incement (-/+)

# 1 - 10
num = 10
for i in range(num+1):
    print(i)


# print all elements in a list (with an index)
# my_nums [11,33,44,.. "bob"]
for i in range(len(my_nums)):
    print(my_nums[i])



# print all elements in a list (without an index)
for element in my_nums:
    print(element)