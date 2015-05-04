#Coded by Jeff Willette from TraderBrains.com
#if you have any questions about the code, go to traderbrains.com and use the contact tab

declare lower;
def series = 1;
def CurrentYear = GetYear();
def CurrentMonth = GetMonth();
def CurrentDOM = GetDayOfMonth(GetYYYYMMDD());

def Day1DOW1 = GetDayOfWeek(CurrentYear * 10000 + CurrentMonth * 100 + 1);
def FirstFridayDOM1 = if Day1DOW1 < 6
    then 6 - Day1DOW1
    else if Day1DOW1 == 6
        then 7
        else 6;
def RollDOM = FirstFridayDOM1 + 14;
def ExpMonth1 = if RollDOM > CurrentDOM
    then CurrentMonth + series - 1
    else CurrentMonth + series;
def ExpMonth2 = if ExpMonth1 > 12
    then ExpMonth1 - 12
    else ExpMonth1;
def ExpYear = if ExpMonth1 > 12
    then CurrentYear + 1
    else CurrentYear;
def Day1DOW = GetDayOfWeek(ExpYear * 10000 + ExpMonth2 * 100 + 1);
def FirstFridayDOM = if Day1DOW < 6
    then 6 - Day1DOW
    else if Day1DOW == 6
        then 7
        else 6;
def ExpDOM = FirstFridayDOM + 14;

#will use the next 3rd friday (ie normally expiring options)
#will not hit weeklys if they exist
def optionExpiryDate = ExpYear * 10000 + ExpMonth2 * 100 + ExpDOM;

AddLabel(1, Concat("ExpDate: ", optionExpiryDate), Color.BLUE);
#defines the ASK price of the ATM put, must have the right date
def optionAsk = close(GetATMOption(GetUnderlyingSymbol(), optionExpiryDate, OptionClass.PUT), AggregationPeriod.HOUR, priceType = "ASK");

#defines the BID price of the ATM put, must have the right date
def optionBid = close(GetATMOption(GetUnderlyingSymbol(), optionExpiryDate, OptionClass.PUT), AggregationPeriod.HOUR, priceType = "BID");

#plots the ATM Bid price - Ask price to get the spread
plot optionBidAskSpread = optionAsk - optionBid;
