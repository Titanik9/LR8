function Complete1()
{
    if(document.Sel3.Id.value==document.Sel3.Pwd1.value)
        alert("Вас зарегестрировали\nID="
        +document.Sel3.Id.value+"\nPassword="
        +document.Sel3.Pwd.value);
    else
        alert("Ошибка при вводе пароля\nПопробуйте ещё");
}