const menuItems=document.querySelectorAll('.menu-items');{
menuItems.forEach(fuction(item))
 {
    item.addEventListener('click', fuction(e))
    {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    }};
};