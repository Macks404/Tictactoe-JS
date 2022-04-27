let turn = "x"

function test(obj)
{
    if(obj.innerText == "")
    {
        obj.innerText = turn;
        if(turn =="x")
        {
            turn = "o";
        }
        else
        {
            turn = "x";
        }
    }
}
function resetBoard()
{
    let items = document.getElementsByClassName("grid-item");
    turn = "x"
    for(let i = 0; i < 9; i++)
    {
        items[i].innerText = null;
    }
}