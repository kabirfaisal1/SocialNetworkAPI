const { User, Thought} = require('../models');

const thoughtController = {
  // /api/thoughts

  // get all thoughts
  getAllThought(req, res) {
    Thought.find({})
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one thoughts by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thoughts found with that id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  createThought({ body }, res) {
    Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
},

  // update Thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      {_id: params.thoughtId},
      body,
      { new: true, runValidators: true}
  ).then(dbUserData => {
      if(!dbUserData) {
          res.status(404).json({message: 'no user found with this id'});
          return;
      }
      res.json(dbUserData);
  }).catch(err => res.json(err));
},

  // delete thought by ID
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({_id: params.thoughtId})
    .then(deletedThought => {
        if(!deletedThought) {
            res.status(404).json({message: 'no thought found with this id'});
            return;
        }
        return User.findOneAndUpdate(
            {_id: params.userId},
            {$pull: { thoughts: params.thoughtId} },
            { new: true }
        )
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'no user found with this id'});
            return;
        }
        res.json({message: 'thought successfully deleted'});
    }).catch(err => res.json(err));
  },

  createReaction({params, body}, res) {
      Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          {$addToSet: {reactions: body}},
          {new: true, runValidators: true}
      ).then(dbUserData => {
          if(!dbUserData) {
              res.status(400).json({message: 'no user found with this id'});
              return;
          } 
          res.json(dbUserData);
      }).catch(err => res.json(err));
  },

  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId},
      { $pull: {reactions: {_id: params.reactionId} } },
      {new: true}
  ).then(dbCommentData => res.json(dbCommentData))
  .catch(err => res.json(err));
}


};

module.exports = thoughtController