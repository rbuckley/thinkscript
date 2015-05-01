
declare lower;

input optionExpiration = "150515";
input strike = 260.0;
input strikeSpacing = 10.0;
input mode = {default volume, totalVolume, openInterest, volumePercentOI};
input totalStrikes = {default Five, Three, One};


def showThree = if mode == mode.volume and totalStrikes == totalStrikes.Three then 1 else 0;
def showFive = if  mode == mode.volume and totalStrikes == totalStrikes.Five then 1 else 0;

AddLabel(yes, Concat(Concat(".", GetSymbol()), optionExpiration));

AddLabel(yes,  Concat(Concat(".", GetSymbol()), optionExpiration), Color.WHITE);
AddLabel(yes, Concat(strike, "P"), Color.RED);
AddLabel(showThree or showFive, Concat(strike - strikeSpacing, "P"), Color.MAGENTA);
AddLabel(showThree or showFive, Concat(strike + strikeSpacing, "P"), Color.ORANGE);
AddLabel(showFive, Concat(strike - strikeSpacing - strikeSpacing, "P"), Color.PINK);
AddLabel(showFive, Concat(strike + strikeSpacing + strikeSpacing, "P"), Color.GRAY);
AddLabel(yes, Concat(strike, "C"), Color.GREEN);
AddLabel(showThree or showFive, Concat(strike - strikeSpacing, "C"), Color.CYAN);
AddLabel(showThree or showFive, Concat(strike + strikeSpacing, "C"), Color.BLUE);
AddLabel(showFive, Concat(strike - strikeSpacing - strikeSpacing, "C"), Color.LIME);
AddLabel(showFive, Concat(strike + strikeSpacing + strikeSpacing, "C"), Color.WHITE);

def putOptionVolume =  if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike)));
rec cumPutVolume = cumPutVolume[1] + putOptionVolume;
def totalputOptionVolume = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike)), "DAY");
def putOptionOI = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike)), "DAY");
def callOptionVolume = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike)));
rec cumCallVolume = cumCallVolume[1] + callOptionVolume;
def totalcallOptionVolume = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike)), "DAY");
def callOptionOI = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike)), "DAY");

def putOptionVolume1 = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike - strikeSpacing)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike - strikeSpacing)));
rec cumPutVolume1 = cumPutVolume1[1] + putOptionVolume1;
def totalputOptionVolume1 = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike - strikeSpacing)), "DAY");
def putOptionOI1 = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike - strikeSpacing)), "DAY");
def callOptionVolume1 = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike - strikeSpacing)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike - strikeSpacing)));
rec cumCallVolume1 = cumCallVolume1[1] + callOptionVolume1;
def totalcallOptionVolume1 = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike - strikeSpacing)), "DAY");
def callOptionOI1 = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike - strikeSpacing)), "DAY");

def putOptionVolume2 = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike + strikeSpacing)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike + strikeSpacing)));
rec cumPutVolume2 = cumPutVolume2[1] + putOptionVolume2;
def totalputOptionVolume2 = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike + strikeSpacing)), "DAY");
def putOptionOI2 = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike + strikeSpacing)), "DAY");
def callOptionVolume2 = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike + strikeSpacing)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike + strikeSpacing)));
rec cumCallVolume2 = cumCallVolume2[1] + callOptionVolume2;
def totalcallOptionVolume2 = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike + strikeSpacing)), "DAY");
def callOptionOI2 = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike + strikeSpacing)), "DAY");

def putOptionVolume3 = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike - strikeSpacing - strikeSpacing)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike - strikeSpacing - strikeSpacing)));
rec cumPutVolume3 = cumPutVolume3[1] + putOptionVolume3;
def totalputOptionVolume3 = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike - strikeSpacing - strikeSpacing)), "DAY");
def putOptionOI3 = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike - strikeSpacing - strikeSpacing)), "DAY");
def callOptionVolume3 = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike - strikeSpacing - strikeSpacing)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike - strikeSpacing - strikeSpacing)));
rec cumCallVolume3 = cumCallVolume3[1] + callOptionVolume3;
def totalcallOptionVolume3 = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike - strikeSpacing - strikeSpacing)), "DAY");
def callOptionOI3 = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike - strikeSpacing - strikeSpacing)), "DAY");

def putOptionVolume4 = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike + strikeSpacing + strikeSpacing)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike + strikeSpacing + strikeSpacing)));
rec cumPutVolume4 = cumPutVolume4[1] + putOptionVolume4;
def totalputOptionVolume4 = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike + strikeSpacing + strikeSpacing)), "DAY");
def putOptionOI4 = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("P", strike + strikeSpacing + strikeSpacing)), "DAY");
def callOptionVolume4 = if IsNaN(volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike + strikeSpacing + strikeSpacing)))) then 0 else volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike + strikeSpacing + strikeSpacing)));
rec cumCallVolume4 = cumCallVolume4[1] + callOptionVolume4;
def totalcallOptionVolume4 = volume(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike + strikeSpacing + strikeSpacing)), "DAY");
def callOptionOI4 = open_interest(Concat( Concat(Concat(".", GetSymbol()), optionExpiration), Concat("C", strike + strikeSpacing + strikeSpacing)), "DAY");

plot zero = 0;
zero.SetDefaultColor(Color.WHITE);
zero.HideTitle();

plot datap4;
plot datac4;
switch (mode){
case volume:
    datap4 = -putOptionVolume4 * showFive;
    datac4 = callOptionVolume4 * showFive;
case totalVolume:
    datap4 = Double.NaN;
    datac4 = Double.NaN;
case openInterest:
    datap4 = Double.NaN;
    datac4 = Double.NaN;
case volumePercentOI:
    datap4 = Double.NaN;
    datac4 = Double.NaN;
}
datap4.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datac4.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datap4.SetDefaultColor(Color.GRAY);
datac4.SetDefaultColor(Color.WHITE);
datap4.SetLineWeight(3);
datac4.SetLineWeight(3);
datap4.HideTitle();
datac4.HideTitle();
datap4.HideBubble();
datac4.HideBubble();

plot datap3;
plot datac3;
switch (mode){
case volume:
    datap3 = -putOptionVolume3 * showFive - putOptionVolume4 * showFive;
    datac3 = callOptionVolume3 * showFive + callOptionVolume4 * showFive;
case totalVolume:
    datap3 = Double.NaN;
    datac3 = Double.NaN;
case openInterest:
    datap3 = Double.NaN;
    datac3 = Double.NaN;
case volumePercentOI:
    datap3 = Double.NaN;
    datac3 = Double.NaN;
}
datap3.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datac3.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);

datap3.SetDefaultColor(Color.PINK);
datac3.SetDefaultColor(Color.LIME);

datap3.SetLineWeight(3);
datac3.SetLineWeight(3);
datap3.HideTitle();
datac3.HideTitle();
datap3.HideBubble();
datac3.HideBubble();

plot datap2;
plot datac2;
switch (mode){
case volume:
    datap2 = -putOptionVolume2 * (showThree or showFive) - putOptionVolume3 * showFive - putOptionVolume4 * showFive;
    datac2 = +callOptionVolume2 * (showThree or showFive) + callOptionVolume3 * showFive + callOptionVolume4 * showFive;
case totalVolume:
    datap2 = Double.NaN;
    datac2 = Double.NaN;
case openInterest:
    datap2 = Double.NaN;
    datac2 = Double.NaN;
case volumePercentOI:
    datap2 = Double.NaN;
    datac2 = Double.NaN;
}
datap2.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datac2.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datap2.SetDefaultColor(Color.ORANGE);
datac2.SetDefaultColor(Color.BLUE);
datap2.SetLineWeight(3);
datac2.SetLineWeight(3);
datap2.HideTitle();
datac2.HideTitle();
datap2.HideBubble();
datac2.HideBubble();

plot datap1;
plot datac1;
switch (mode){
case volume:
    datap1 = -putOptionVolume1 * (showThree or showFive) - putOptionVolume2 * (showThree or showFive) - putOptionVolume3 * showFive - putOptionVolume4 * showFive;
    datac1 = callOptionVolume1 * (showThree or showFive) + callOptionVolume2 * (showThree or showFive) + callOptionVolume3 * showFive + callOptionVolume4 * showFive;
case totalVolume:
    datap1 = Double.NaN;
    datac1 = Double.NaN;
case openInterest:
    datap1 = Double.NaN;
    datac1 = Double.NaN;
case volumePercentOI:
    datap1 = Double.NaN;
    datac1 = Double.NaN;
}
datap1.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datac1.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datap1.SetDefaultColor(Color.MAGENTA);
datac1.SetDefaultColor(Color.CYAN);
datap1.SetLineWeight(3);
datac1.SetLineWeight(3);
datap1.HideTitle();
datac1.HideTitle();
datap1.HideBubble();
datac1.HideBubble();

plot datap;
plot datac;
switch (mode){
case volume:
    datap = -putOptionVolume - putOptionVolume1 * (showThree or showFive) - putOptionVolume2 * (showThree or showFive) - putOptionVolume3 * showFive - putOptionVolume4 * showFive;
    datac = callOptionVolume + callOptionVolume1 * (showThree or showFive) + callOptionVolume2 * (showThree or showFive) + callOptionVolume3 * showFive + callOptionVolume4 * showFive;
case totalVolume:
    datap = -totalputOptionVolume;
    datac = totalcallOptionVolume;
case openInterest:
    datap = -putOptionOI;
    datac = callOptionOI;
case volumePercentOI:
    datap = -putOptionVolume * 100 / putOptionOI;
    datac = callOptionVolume * 100 / callOptionOI;
}
datap.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datac.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
datap.SetDefaultColor(Color.RED);
datac.SetDefaultColor(Color.GREEN);
datap.SetLineWeight(3);
datac.SetLineWeight(3);
datap.HideTitle();
datac.HideTitle();
datap.HideBubble();
datac.HideBubble();
