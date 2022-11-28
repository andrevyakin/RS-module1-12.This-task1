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