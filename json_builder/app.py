import csv
import sys
import getopt
import pandas as pd
import json
<<<<<<< HEAD
import numpy as np
=======
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
from json import JSONEncoder


json_template = {

}

json_to_sumps = {}

ifile = ""
ofile = ""
otype = ""

myopts, args = getopt.getopt(sys.argv[1:], "i:t:o")

for o, a in myopts:
    if o == '-i':
        ifile = a
    elif o == '-t':
        otype = a
    elif o == '-o':
        ofile = a

    else:
        print("Usage: %s -i input -o output" % sys.argv[0])


<<<<<<< HEAD
df = pd.read_csv(ifile , sep=",")



def np_encoder(object):
    if isinstance(object, np.generic):
        return object.item()
=======
df = pd.read_csv(ifile)
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4


def gettable():
    cols = list(df)
<<<<<<< HEAD
=======
    '''
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
    data = []
    subdata = {}
    for i in cols:
        subdata["name"] = i
        subdata["data"] = dict(df[i])
<<<<<<< HEAD
       
=======
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
        data.append(subdata)
        subdata = {}
    print("to table !!")
    return data
<<<<<<< HEAD




def getplot():    
=======
'''

def getplot():
    del df["SOMAscan ID"]
    del df["UniProt ID"]
    del df["Protein"]
    del df["Gene"]
    del df["#SNP"] 
    
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
    cols = list(df)
    data = []
    subdata = {}
    for i in cols:
        subdata["nae"] = i
<<<<<<< HEAD
        subdata["data"] = int(dict(df[i]) )
        
=======
        subdata["data"] = dict(df[i])
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
        subdata["title"] = i
        data.append(subdata)
        subdata = {}
    print("to plot !!")
    return data








 


print("the stype :" + otype)


<<<<<<< HEAD
if __name__ == "__main__":
    gettable()
    json_string = json.dumps(gettable(),indent=4 , default=np_encoder )
    with open("table.json", "w") as outfile:
=======
if otype == "plot":
    getplot()
    json_string = json.dumps(getplot(),indent=4 )
    with open("metabolon_plot.json", "w") as outfile:
>>>>>>> a8a2cd03182ec680883b6b5aa5f25ba7179763c4
        outfile.write(json_string)
else:
    print("please chose your type -t table or -t plot")
