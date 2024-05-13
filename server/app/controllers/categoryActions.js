const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  const browse = (req, res) => {
    if (req.query.q != null ) {
      const filteredCategories = categories.filter((categorie) =>
      categorie.name.includes(req.query.q)
    );

    res.json(filteredCategories);
    } else {
      res.json(categories);
    }   
  };

  const read = (req,res) => {
    const parseID = parseInt(req.params.id, 10);

    const categorie = categories.find((c) => c.id === parseID);

    if ( categorie !=null) {
      res.json(categorie);
    } else {
      res.sendStatus(404);
    }
  };
  
  module.exports = { browse, read };