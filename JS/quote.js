const quotes = [
{
    quote : "늦었다고 생각할 때가 늦은거다."
},
{
    quote : "내일도 할 수 있는 일은 굳이 오늘 할 필요 없다."
},
{
    quote : "내가 옳을땐 아무도 기억하지 않지만, 내가 틀리면 모두가 기억한다."
},
{
    quote : "믿음이란 종이와도 같다. 한번 구겨지면 다시 원래대로 될 수 없다."
},
{
    quote : "네가 길을 떠날 때, 아무도 따라오지 않는다면, 그냥 가던길을 계속 가라."
},
{
    quote : "인생에서 가장 즐거운 일은 사람들이 너에게 하지 못할 것이라고 말한 것을 해낼 때이다."
},
{
    quote : "네가 할 수 있다고 생각하던지 할 수 없다고 생각하던지 네가 옳다."
},
{
    quote : "쉬운일이 아니라 가치있는 길을 택하라. "
},
{
    quote : "네가 안락함에서 나오는 순간 네 삶은 시작된다."
}
];

const quote =document.querySelector("#quote span");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;