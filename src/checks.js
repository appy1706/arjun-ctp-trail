// Mini checks: 3 short questions for every lesson (new questions, separate from the module quizzes).
// Each helper call is: ck(question, correct answer, [3 wrong answers], explanation, optional passage).
// The correct answer is written first here. The app shuffles the choices in a fixed, repeatable way.
const ck = (q, c, w, e, pass) => ({ q, c, w, e, pass: pass || null });

const PASS_R1 = { title: "Clever crows", text: [
  "Crows are among the smartest birds. They can use tools, such as bending a twig into a hook to pull insects out of a hole, and they remember human faces. Some crows have even been seen dropping nuts onto roads so that passing cars crack them open. Scientists think these abilities help crows survive in cities, where food can be hard to find.",
] };
const PASS_R2 = { title: "At the bus stop", text: [
  "When Lena reached the bus stop, her coat was soaked and she was out of breath. She looked at the empty street, then at her watch, and sighed. Behind her, the faint rumble of a bus faded around the corner.",
] };
const PASS_R3 = { title: "The lighthouse keeper", text: [
  "For forty years, Mr. Hale climbed the 112 steps of the lighthouse every evening. His knees ached, and the passing ships never thanked him, but he never missed a night. \"A light that goes out,\" he liked to say, \"is worse than no light at all.\"",
] };

export const CHECK_DATA = {
  // ---------- Verbal reasoning ----------
  V1: [
    ck("Thermometer : temperature :: scale : ___", "weight", ["kitchen", "heavy", "balance"], "A thermometer measures temperature. A scale measures weight. The relationship is tool : what it measures."),
    ck("Chef : kitchen :: pilot : ___", "cockpit", ["airport", "plane", "sky"], "A chef works in a kitchen. A pilot works in a cockpit. The relationship is worker : place where the work is done."),
    ck("Diligent : lazy :: generous : ___", "stingy", ["kind", "rich", "giving"], "Diligent and lazy are opposites. The opposite of generous is stingy. Kind and giving are close to generous, not opposite."),
  ],
  V2: [
    ck("Which word does NOT belong? sparrow, falcon, bat, robin", "bat", ["sparrow", "falcon", "robin"], "Sparrows, falcons and robins are birds. A bat is a flying mammal."),
    ck("Which word does NOT belong? triangle, square, cube, hexagon", "cube", ["triangle", "square", "hexagon"], "Triangles, squares and hexagons are flat (2-D) shapes. A cube is a solid (3-D) shape."),
    ck("Which word does NOT belong? kilometer, meter, centimeter, kilogram", "kilogram", ["kilometer", "meter", "centimeter"], "Kilometers, meters and centimeters measure length. A kilogram measures mass."),
  ],
  V3: [
    ck("All the dogs in the park wear collars. Max is a dog in the park. Which must be true?", "Max wears a collar.", ["Max is the only dog in the park.", "Max is a puppy.", "Max has a leash."], "Every dog in the park wears a collar, and Max is one of those dogs, so Max wears a collar. The other statements are not stated."),
    ck("Ana is taller than Ben. Ben is taller than Cy. Which must be true?", "Ana is taller than Cy.", ["Cy is taller than Ana.", "Ben is the tallest.", "Ana and Cy are the same height."], "If Ana > Ben and Ben > Cy, then Ana > Cy. The ordering is Ana, Ben, Cy from tallest to shortest."),
    ck("If it snows, school is closed. School is open today. What can you conclude?", "It did not snow.", ["It snowed.", "It might have snowed.", "School never closes."], "This is the contrapositive. If snow always closes school and school is open, there was no snow."),
  ],
  // ---------- Quantitative reasoning ----------
  Q1: [
    ck("3, 6, 12, 24, ___", "48", ["36", "30", "32"], "Each number is double the one before it. 24 \u00d7 2 = 48."),
    ck("5, 8, 13, 20, 29, ___", "40", ["38", "39", "41"], "The differences are 3, 5, 7, 9, so the next difference is 11. 29 + 11 = 40."),
    ck("100, 90, 81, 73, ___", "66", ["65", "64", "63"], "The differences are \u221210, \u22129, \u22128, so the next is \u22127. 73 \u2212 7 = 66."),
  ],
  Q2: [
    ck("x is greater than 1. Which is greater, x or x\u00b2?", "x\u00b2", ["x", "They are equal.", "It cannot be determined."], "For any number greater than 1, squaring makes it bigger. Try x = 3: 9 is greater than 3."),
    ck("Which is greater, 3/8 or 0.4?", "0.4", ["3/8", "They are equal.", "It cannot be determined."], "3/8 = 0.375, which is less than 0.4."),
    ck("Quantity A is 25% of 80. Quantity B is 80% of 25. Compare them.", "They are equal.", ["A is greater.", "B is greater.", "It cannot be determined."], "25% of 80 = 20 and 80% of 25 = 20. They are equal."),
  ],
  Q3: [
    ck("A number is doubled, then 5 is subtracted. The result is 21. What was the number?", "13", ["8", "16", "26"], "Work backward: add 5 to get 26, then halve to get 13. Check: 13 \u00d7 2 \u2212 5 = 21."),
    ck("A rule is: output = 4n + 1. What is the output when n = 6?", "25", ["24", "27", "21"], "4 \u00d7 6 = 24, and 24 + 1 = 25."),
    ck("A rule turns 2 into 7, 3 into 10 and 4 into 13. What does 6 become?", "19", ["16", "18", "20"], "The outputs go up by 3 each time, and 2 gives 7, so the rule is 3n + 1. For n = 6: 18 + 1 = 19."),
  ],
  // ---------- Fractions, ratios, percents ----------
  N1: [
    ck("What is 3/4 + 5/6?", "1 7/12", ["8/10", "1 1/12", "1 5/12"], "Use 12 as the common denominator: 9/12 + 10/12 = 19/12 = 1 7/12. Never add the denominators."),
    ck("What is 0.6 \u00d7 0.35?", "0.21", ["2.1", "0.021", "0.95"], "6 \u00d7 35 = 210. There are 3 decimal places in total, so the answer is 0.210 = 0.21."),
    ck("Which number is the greatest? 0.6, 5/8, 0.62, 7/12", "5/8", ["0.6", "0.62", "7/12"], "As decimals: 0.6, 0.625, 0.62 and 0.583. The greatest is 0.625, which is 5/8."),
  ],
  N2: [
    ck("The ratio of cats to dogs at a shelter is 2 : 3. There are 15 dogs. How many cats are there?", "10", ["5", "12", "30"], "3 parts = 15 dogs, so 1 part = 5. Cats are 2 parts: 2 \u00d7 5 = 10."),
    ck("If 4 notebooks cost $6, how much do 10 notebooks cost?", "$15", ["$12", "$24", "$16"], "One notebook costs $6 \u00f7 4 = $1.50. Ten cost 10 \u00d7 $1.50 = $15."),
    ck("A runner goes 6 miles in 45 minutes. At the same pace, how long will 10 miles take?", "75 minutes", ["60 minutes", "70 minutes", "90 minutes"], "45 \u00f7 6 = 7.5 minutes per mile. 10 \u00d7 7.5 = 75 minutes."),
  ],
  N3: [
    ck("What is 35% of 60?", "21", ["12", "24", "25"], "10% of 60 is 6, so 30% is 18 and 5% is 3. 18 + 3 = 21."),
    ck("A shirt costs $40 and is on sale for 15% off. What is the sale price?", "$34", ["$25", "$6", "$38"], "15% of $40 is $6. $40 \u2212 $6 = $34."),
    ck("A town grew from 800 people to 1,000 people. What is the percent increase?", "25%", ["20%", "200%", "40%"], "The increase is 200. 200 \u00f7 800 = 0.25, which is 25%. Always divide by the starting amount."),
  ],
  N4: [
    ck("What is the greatest common factor of 24 and 36?", "12", ["6", "8", "72"], "The factors of 24 and 36 that match are 1, 2, 3, 4, 6 and 12. The greatest is 12."),
    ck("What is 2\u00b3 \u00d7 3\u00b2?", "72", ["36", "54", "15"], "2\u00b3 = 8 and 3\u00b2 = 9. 8 \u00d7 9 = 72."),
    ck("Which of these is a prime number?", "29", ["27", "33", "39"], "27, 33 and 39 are all divisible by 3. 29 has no factors other than 1 and itself."),
  ],
  // ---------- Algebra ----------
  A1: [
    ck("What is 8 + 3 \u00d7 2\u00b2?", "20", ["44", "32", "28"], "Exponent first: 2\u00b2 = 4. Then multiply: 3 \u00d7 4 = 12. Then add: 8 + 12 = 20."),
    ck("What is \u22125 \u2212 (\u22129)?", "4", ["\u221214", "\u22124", "14"], "Subtracting a negative is adding: \u22125 + 9 = 4."),
    ck("What is (\u22123)\u00b2 \u2212 2 \u00d7 4?", "1", ["17", "\u22121", "\u221217"], "(\u22123)\u00b2 = 9. 2 \u00d7 4 = 8. 9 \u2212 8 = 1."),
  ],
  A2: [
    ck("Simplify 3(x + 4) \u2212 2x.", "x + 12", ["5x + 12", "x + 4", "x + 7"], "Distribute: 3x + 12 \u2212 2x. Combine like terms: x + 12."),
    ck("Which expression is equivalent to 5(2n \u2212 3)?", "10n \u2212 15", ["10n \u2212 3", "7n \u2212 3", "10n + 15"], "Multiply both terms by 5: 5 \u00d7 2n = 10n and 5 \u00d7 (\u22123) = \u221215."),
    ck("Evaluate 4a \u2212 2(a + 1) when a = 5.", "8", ["18", "10", "12"], "4(5) = 20 and 2(5 + 1) = 12. 20 \u2212 12 = 8."),
  ],
  A3: [
    ck("Solve 3x + 5 = 20.", "x = 5", ["x = 15", "x = 6", "x = 8"], "Subtract 5: 3x = 15. Divide by 3: x = 5."),
    ck("Solve x/3 \u2212 2 = 4.", "x = 18", ["x = 6", "x = 12", "x = 14"], "Add 2: x/3 = 6. Multiply by 3: x = 18."),
    ck("Which is the solution of 2x \u2212 3 < 7?", "x < 5", ["x > 5", "x < 2", "x < 10"], "Add 3: 2x < 10. Divide by 2: x < 5."),
  ],
  // ---------- Geometry ----------
  G1: [
    ck("A rectangle is 9 cm long and 4 cm wide. What is its perimeter?", "26 cm", ["36 cm", "13 cm", "18 cm"], "Perimeter = 2 \u00d7 (9 + 4) = 26 cm. (36 is the area, in square cm.)"),
    ck("What is the area of a circle with a radius of 5? (Use \u03c0 \u2248 3.14.)", "78.5", ["31.4", "157", "25"], "Area = \u03c0r\u00b2 = 3.14 \u00d7 25 = 78.5. (31.4 is the circumference of a circle with radius 5.)"),
    ck("A triangle has a base of 10 and a height of 6. What is its area?", "30", ["60", "16", "32"], "Area = \u00bd \u00d7 base \u00d7 height = \u00bd \u00d7 10 \u00d7 6 = 30."),
  ],
  G2: [
    ck("Two angles of a triangle measure 50\u00b0 and 70\u00b0. What is the third angle?", "60\u00b0", ["120\u00b0", "40\u00b0", "70\u00b0"], "Angles in a triangle add to 180\u00b0. 180 \u2212 50 \u2212 70 = 60."),
    ck("Two angles are complementary. One measures 35\u00b0. What is the other?", "55\u00b0", ["145\u00b0", "65\u00b0", "45\u00b0"], "Complementary angles add to 90\u00b0. 90 \u2212 35 = 55. (145 would be the supplement.)"),
    ck("A right triangle has legs of 6 and 8. What is the length of the hypotenuse?", "10", ["14", "12", "48"], "6\u00b2 + 8\u00b2 = 36 + 64 = 100, and \u221a100 = 10."),
  ],
  G3: [
    ck("What is the volume of a box that is 5 by 4 by 3?", "60", ["12", "47", "94"], "Volume = length \u00d7 width \u00d7 height = 5 \u00d7 4 \u00d7 3 = 60."),
    ck("How many centimeters are in 2.5 meters?", "250", ["25", "2,500", "0.025"], "There are 100 cm in 1 meter. 2.5 \u00d7 100 = 250."),
    ck("How far apart are the points (\u22121, 4) and (\u22121, \u22123)?", "7 units", ["1 unit", "5 units", "4 units"], "The x-values are the same, so count the y-distance: from 4 down to \u22123 is 4 + 3 = 7 units."),
  ],
  // ---------- Data and probability ----------
  D1: [
    ck("What is the median of 1, 4, 5, 9, 16?", "5", ["7", "9", "4"], "The numbers are in order and the middle one is 5. (The mean is 7, but the question asks for the median.)"),
    ck("Test scores so far are 80, 90, 85 and 95. What score on the fifth test gives a mean of 88?", "90", ["88", "85", "100"], "A mean of 88 over 5 tests needs a total of 440. The first four add to 350, so the fifth must be 90."),
    ck("What is the range of 12, 7, 20, 15, 9?", "13", ["20", "7", "12"], "Range = greatest minus least = 20 \u2212 7 = 13."),
  ],
  D2: [
    ck("A table shows pets owned: Dogs 12, Cats 9, Fish 5, Birds 4. What fraction of the 30 pets are dogs?", "2/5", ["1/3", "3/10", "12/18"], "12 out of 30 pets are dogs. 12/30 simplifies to 2/5."),
    ck("A plant's height was 2 cm in Week 1, 5 cm in Week 2, 9 cm in Week 3 and 10 cm in Week 4. Between which weeks did it grow the most?", "Weeks 2 and 3", ["Weeks 1 and 2", "Weeks 3 and 4", "Weeks 1 and 4"], "The growth was 3 cm, then 4 cm, then 1 cm. The biggest jump was from Week 2 to Week 3."),
    ck("A bar graph shows sales of 15 on Monday, 21 on Tuesday and 18 on Wednesday. What is the mean daily sale?", "18", ["21", "54", "15"], "The total is 15 + 21 + 18 = 54. 54 \u00f7 3 = 18."),
  ],
  D3: [
    ck("A bag has 3 red, 5 blue and 2 green marbles. What is the probability of picking a blue one?", "1/2", ["1/5", "5/8", "3/10"], "There are 10 marbles and 5 are blue. 5/10 = 1/2."),
    ck("How many different outfits can be made from 4 shirts and 3 pairs of pants?", "12", ["7", "24", "9"], "Multiply the choices: 4 \u00d7 3 = 12."),
    ck("A fair die is rolled. What is the probability of getting a number greater than 4?", "1/3", ["1/6", "2/3", "1/2"], "The numbers greater than 4 are 5 and 6, so 2 of 6 outcomes. 2/6 = 1/3."),
  ],
  // ---------- Vocabulary ----------
  W1: [
    ck("The rain destroyed half the crops, so the farmers were ______ about the winter.", "anxious", ["cheerful", "bored", "generous"], "Losing half the crops would make people worried. Anxious means worried."),
    ck("The old map was so faded and ______ that no one could read the names.", "illegible", ["vivid", "colorful", "spacious"], "A faded map that cannot be read is illegible, which means impossible to read."),
    ck("She usually spoke boldly, but she answered the stranger in a ______ voice, barely above a whisper.", "timid", ["booming", "rude", "cheerful"], "Barely above a whisper is the clue. Timid means shy and nervous."),
  ],
  W2: [
    ck("The prefix \"mis-\" means wrong or badly. What does \"misjudge\" mean?", "to judge wrongly", ["to judge again", "to judge before", "not to judge"], "Mis- + judge = judge wrongly."),
    ck("The root \"port\" means carry. Which word means \"able to be carried\"?", "portable", ["importer", "reporter", "porter"], "The suffix -able means able to be. Portable = able to be carried."),
    ck("The suffix \"-less\" means without. Which word means \"without fear\"?", "fearless", ["fearful", "fearsome", "feared"], "Fear + -less = without fear."),
  ],
  W3: [
    ck("Which word has the most positive feeling? It describes someone who spends little money.", "thrifty", ["stingy", "cheap", "miserly"], "All four describe careful spending, but thrifty sounds admiring. The others sound negative."),
    ck("\"The wind whispered through the trees.\" This is an example of", "personification", ["a simile", "hyperbole", "alliteration"], "Wind cannot whisper. Giving a human action to something that is not human is personification."),
    ck("\"I have told you a million times!\" is an example of", "hyperbole", ["a metaphor", "a simile", "irony"], "A million times is an exaggeration for effect. That is hyperbole."),
  ],
  // ---------- Reading ----------
  R1: [
    ck("Which statement best expresses the main idea of the passage?", "Crows are intelligent birds that solve problems in clever ways.", ["Crows eat only nuts.", "Cars are dangerous to birds.", "Cities are good places for most birds."], "Every detail shows crows being clever: tools, faces, and cracking nuts. That is the main idea.", PASS_R1),
    ck("According to the passage, how do some crows crack nuts?", "By dropping them onto roads", ["By bending twigs into hooks", "By burying them", "By carrying them to nests"], "The passage says some crows drop nuts onto roads so cars crack them open.", PASS_R1),
    ck("Which detail best supports the idea that crows use tools?", "They bend twigs into hooks to pull out insects.", ["They remember human faces.", "They live in cities.", "Scientists study them."], "A bent twig used as a hook is a tool. The other choices are true details but do not show tool use.", PASS_R1),
  ],
  R2: [
    ck("What can be inferred from the passage?", "Lena just missed her bus.", ["Lena is early for her bus.", "Lena dislikes buses.", "Lena forgot her coat."], "She is out of breath, the street is empty, and a bus rumbles away. She just missed it.", PASS_R2),
    ck("Which detail best supports the inference that Lena hurried?", "She was out of breath.", ["She sighed.", "The street was empty.", "She looked at her watch."], "Being out of breath is the evidence that she had been rushing.", PASS_R2),
    ck("What can be inferred about the weather?", "It had probably been raining.", ["It was a hot, dry day.", "It was clear and sunny.", "It was a calm, dry morning."], "Her coat was soaked, which suggests rain.", PASS_R2),
  ],
  R3: [
    ck("The author's main purpose is to", "show Mr. Hale's dedication to his duty", ["explain how lighthouses work", "persuade readers to visit a lighthouse", "describe the ships at sea"], "The passage shows him climbing the steps for forty years without missing a night despite sore knees and no thanks.", PASS_R3),
    ck("What does Mr. Hale's saying suggest?", "Being unreliable can be worse than offering nothing, because people depend on you.", ["Lights are cheap to keep burning.", "Ships should avoid lighthouses.", "Nobody notices a lighthouse."], "If sailors count on the light and it goes out, they are worse off than if they never had one.", PASS_R3),
    ck("Which word best describes Mr. Hale?", "dedicated", ["careless", "boastful", "restless"], "He never missed a night. That is dedication.", PASS_R3),
  ],
  // ---------- Writing mechanics ----------
  M1: [
    ck("Which sentence is punctuated correctly?", "After dinner, we walked to the park.", ["After dinner we, walked to the park.", "After dinner we walked, to the park.", "After, dinner we walked to the park."], "A comma follows the introductory phrase \"After dinner.\" The other commas split the sentence in the wrong places."),
    ck("Which sentence uses an apostrophe correctly?", "The children's toys were scattered everywhere.", ["The childrens' toys were scattered everywhere.", "The childrens toys were scattered everywhere.", "The children's toy's were scattered everywhere."], "Children is already plural, so the possessive is children's. Toys is a plain plural and needs no apostrophe."),
    ck("Which sentence punctuates a list correctly?", "We bought apples, bread, and cheese.", ["We bought, apples bread and cheese.", "We bought apples bread, and, cheese.", "We bought apples, bread and, cheese."], "Items in a list are separated by commas. There is no comma right after the verb, and each comma goes between items, not inside them."),
  ],
  M2: [
    ck("Each of the players ______ a water bottle.", "has", ["have", "having", "are having"], "Each is singular, so it takes the singular verb has."),
    ck("Which sentence is correct?", "Jake and I went to the library.", ["Me and Jake went to the library.", "Jake and me went to the library.", "I and Jake went to the library."], "I is the subject. Test it: \"I went to the library.\" It is polite to name the other person first."),
    ck("The team ______ practicing when it started to rain.", "was", ["were", "be", "are"], "Team is a single group here, so the past singular verb was is correct."),
  ],
  M3: [
    ck("Which sentence is capitalized correctly?", "On Monday, Aunt Rosa visited Lake Michigan.", ["On monday, Aunt Rosa visited lake Michigan.", "On Monday, aunt rosa visited Lake michigan.", "on Monday, Aunt Rosa visited lake michigan."], "Days, names and titles used as names, and specific place names are capitalized."),
    ck("Which word is spelled correctly?", "necessary", ["neccessary", "necesary", "nessecary"], "Necessary has one c and two s's: n-e-c-e-s-s-a-r-y."),
    ck("Which is a complete sentence?", "The dog barked at the mail carrier.", ["Because the dog barked.", "Barking at the mail carrier.", "The dog, which barked all night."], "It has a subject (the dog) and a predicate (barked) and expresses a complete thought. The others are fragments."),
  ],
  // ---------- Writing concepts ----------
  C1: [
    ck("Which is the best topic sentence for a paragraph about recycling at school?", "Recycling at our school can reduce waste and build good habits.", ["Our school has many classrooms.", "Plastic bottles are often blue.", "I like going to school."], "A topic sentence states the main point of the paragraph. This one names the topic and the main idea."),
    ck("Read: (1) Exercise strengthens your heart. (2) It also improves your mood. (3) My cousin lives in Texas. (4) It helps you sleep better. Which sentence does not belong?", "Sentence 3", ["Sentence 1", "Sentence 2", "Sentence 4"], "The paragraph is about the benefits of exercise. Sentence 3 is about a cousin and is off topic."),
    ck("Which is the best concluding sentence for a paragraph about why dogs make good pets?", "For these reasons, dogs are loyal and friendly companions.", ["I have a cat.", "Dogs bark.", "Some people like turtles."], "A good conclusion wraps up the main idea. The others are unrelated or too narrow."),
  ],
  C2: [
    ck("The soup was very hot. ______, we waited before eating it.", "As a result", ["However", "For example", "In contrast"], "Waiting was caused by the heat, so a cause-and-effect transition fits: as a result."),
    ck("Which best combines these? \"Mia plays soccer. Mia also plays tennis.\"", "Mia plays soccer and tennis.", ["Mia plays soccer, Mia also tennis.", "Mia plays soccer also tennis plays.", "Mia, soccer and tennis plays."], "Joining the two items with and removes the repeated words and keeps the meaning."),
    ck("I wanted to go to the park. ______, it started to rain.", "However", ["Therefore", "For instance", "Similarly"], "The rain went against what she wanted, so a contrast transition fits: however."),
  ],
  C3: [
    ck("Which sentence is the most concise?", "The meeting starts at noon.", ["The meeting will be starting at the time of noon.", "The meeting is going to start at twelve o'clock noon in the middle of the day.", "The meeting, which is happening, starts at noon time."], "All four say the same thing, but the first uses the fewest words with no repetition."),
    ck("Which revision of \"The man walked across the room\" is the most precise?", "The tired man shuffled across the room.", ["The man went across the room.", "The man moved across the room.", "The man was across the room."], "Shuffled and tired give a specific picture. Went and moved are vague, and was across the room changes the meaning."),
    ck("Which sentence is best for a formal email to a principal?", "I would like to ask permission to leave early on Friday.", ["Hey, can I bail early Friday?", "Gotta go early Friday, okay?", "Yo, I'm out early Friday."], "A formal message uses polite, complete sentences and avoids slang."),
  ],
};
