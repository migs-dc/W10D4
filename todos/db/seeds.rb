# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




todo1 = Todo.create(title: "Code", body: "alot", done: false)
todo2 = Todo.create(title: "Sleep", body: "a bit", done: false)
todo3 = Todo.create(title: "Study for test", body: "Run the practice test 50 times a day", done: false)
todo4 = Todo.create(title: "todo part 2", body: "make it pretty", done: true)

step1 = Step.create!(title: "redux", body: "testing1", done: false, todo_id: todo1.id)
step2 = Step.create(title: "react-redux", body: "test2", done: false, todo_id: todo1.id)
step3 = Step.create(title: "react-redux-2", body: "test3", done: false, todo_id: todo1.id)
step4 = Step.create!(title: "fullstack", body: "lots of fun", done: false, todo_id: todo1.id)