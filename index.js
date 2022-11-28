const technology = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
const student = {
    stack: ["HTML"],
    level: 1,
    improveLevel() {
        //Если юзер захочет присвоить level некорректное значение.
        if (isNaN(this.level) || this.level <= 0)
            this.level = 1;
        this.level++;
        if (this.level > 5) {
            this.stack = technology;
            alert("Студент выучил все технологии!");
        } else {
            this.stack = [];
            for (let i = 0; i < this.level; i++)
                this.stack[i] = technology[i];
        }
        return this;
    }
}

student.level = "двоечник";

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
console.log(student);

student.level = 3;
console.log(student.improveLevel());

//Или "в лоб", если есть уверенность что level никто не изменит
const student2 = {
    stack: ["HTML"],
    level: 1,
    improveLevel() {
        this.level++;
        switch (this.level) {
            case 2:
                this.stack.push("CSS");
                break;
            case 3:
                this.stack.push("JavaScript");
                break;
            case 4:
                this.stack.push("React");
                break;
            case 5:
                this.stack.push("NodeJS");
                break;
            default:
                alert("Студент выучил все технологии!");
        }
        return this;
    }
}

student2
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()

console.log( student2);

