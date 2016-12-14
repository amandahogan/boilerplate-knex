exports.seed = function (knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        knex('posts').insert({user_id: 99901, title:
        knex('posts').insert({user_id: 99902, title:
        knex('posts').insert({user_id: 99903, title:
        knex('posts').insert({user_id: 99904, title:
        knex('posts').insert({user_id: 99905, title:
        knex('posts').insert({user_id: 99906, title:
        knex('posts').insert({user_id: 99907, title:
        knex('posts').insert({user_id: 99908, title: 
        knex('posts').insert({user_id: 99909, title:
        knex('posts').insert({user_id: 99910, title:
        knex('posts').insert({user_id: 99911, title: ''}),
        knex('posts').insert({user_id: 99912, title: ''}),
        knex('posts').insert({user_id: 99913, title: ''}),
        knex('posts').insert({user_id: 99914, title: ''}),
        knex('posts').insert({user_id: 99915, title: ''}),
        knex('posts').insert({user_id: 99916, title: ''}),
        knex('posts').insert({user_id: 99917, title: ''}),
        knex('posts').insert({user_id: 99918, title: ''}),
        knex('posts').insert({user_id: 99919, title: ''}),
        knex('posts').insert({user_id: 99920, title: ''}),
        knex('posts').insert({user_id: 99921, title: ''}),
        knex('posts').insert({user_id: 99922, title: ''}),
        knex('posts').insert({user_id: 99923, title: ''}),
        knex('posts').insert({user_id: 99924, title: ''}),
        knex('posts').insert({user_id: 99925, title: ''}),
        knex('posts').insert({user_id: 99926, title: ''})
      ]);
    });
};
