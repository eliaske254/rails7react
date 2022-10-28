# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Creating questions'
questions = Question.create ([
  {
    title: 'How to check if a key is present in a Hash?',
    tag: 'Ruby'
  },
  {
    title: 'What is the difference between a string and symbol?',
    tag: 'Ruby'
  },
  {
    title: 'What happens if you add two same keys in a Hash?',
    tag: 'Ruby'
  },
  {
    title: 'How to delete a given key from hash?',
    tag: 'Ruby'
  },
  {
    title: 'How to check if two hashes are identical?',
    tag: 'Ruby'
  },
  {
    title: 'What does the has_key?, key? member? and include? methods in a hash?',
    tag: 'Ruby'
  },
  {
    title: 'How to get unique keys from two hashes in Ruby?',
    tag: 'Ruby'
  },
  {
    title: 'What are blocks in Ruby?',
    tag: 'Ruby'
  },
  {
    title: 'How to check if two hashes are identical?',
    tag: 'Ruby'
  },
  {
    title: 'Does the order of keys matter ito compare two hashes in Ruby?',
    tag: 'Ruby'
  },
  {
    title: 'What is render method in react class component?',
    tag: 'React'
  },
  {
    title: 'What is the difference between class and functional components in React?',
    tag: 'React'
  },
  {
    title: 'What is the key property in React?',
    tag: 'React'
  },
  {
    title: 'What is render method in react class component?',
    tag: 'React'
  },
  {
    title: 'How to get unique keys from two hashes in Ruby?',
    tag: 'React'
  },
  {
    title: 'What are hooks in React?',
    tag: 'React'
  },
  {
    title: 'What is useState in React?',
    tag: 'React'
  },
  {
    title: 'What is creatorRoot method in React?',
    tag: 'React'
  }

])

puts 'Questions created!'