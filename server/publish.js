Meteor.publish('recipes', function()
{
  return Recipes.find({author:this.userId});// this will return all the data related to the user having that userId.
});
