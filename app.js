const item = document.querySelector('.item'),
    placeholders = document.querySelectorAll('.placeholder');

const dragover = (ev) => {
    ev.preventDefault();
};

const dragenter = (ev) => {
    const target = ev.target;
    target.classList.add('hovered');
};

const dragleave = (ev) => {
    const target = ev.target;
    target.classList.remove('hovered');
};

const dragDrop = (ev) => {
    const target = ev.target;
    target.append(item);
    target.classList.remove('hovered');
};

const dragStart = (ev) => {
    const target = ev.target;
    target.classList.add('hold');
    setTimeout(() => target.classList.add('hide'), 0);
};

const dragEnd = (ev) => {
    const target = ev.target;
    target.classList.remove('hold', 'hide');
};


item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragDrop);
});