const request = require('request');

function M(n, cb) {
  request(`http://localhost:9999/message/${n}`, (err, res, body) => {
    if (err) {
      return cb(err);
    } else {
      const result = JSON.parse(body);
      const number = result.data.number;
      return cb(null, number);
    }
  });
}

function getResult(cb) {
  M(1, (err, n1) => {
    if (err) {
      return cb(err);
    } else {
      M(2, (err, n2) => {
        if (err) {
          return cb(err);
        } else {
          M(3, (err, n3) => {
            if (err) {
              return cb(err);
            } else {
              M(4, (err, n4) => {
                if (err) {
                  return cb(err);
                } else {
                  M(5, (err, n5) => {
                    if (err) {
                      return cb(err);
                    } else {
                      M(6, (err, n6) => {
                        if (err) {
                          return cb(err);
                        } else {
                          M(7, (err, n7) => {
                            if (err) {
                              return cb(err);
                            } else {
                              M(8, (err, n8) => {
                                if (err) {
                                  return cb(err);
                                } else {
                                  M(9, (err, n9) => {
                                    if (err) {
                                      return cb(err);
                                    } else {
                                      M(n1 + n2 + n3, (err, n123) => {
                                        if (err) {
                                          return cb(err);
                                        } else {
                                          M(n4 + n5 + n6, (err, n456) => {
                                            if (err) {
                                              return cb(err);
                                            } else {
                                              M(n7 + n8 + n9, (err, n789) => {
                                                if (err) {
                                                  return cb(err);
                                                } else {
                                                  M(n123 + n456 + n789, (err, nn) => {
                                                    if (err) {
                                                      return cb(err);
                                                    } else {
                                                      return cb(null, nn);
                                                    }
                                                  })
                                                }
                                              });
                                            }
                                          });
                                        }
                                      });
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

const start = Date.now();
getResult((err, result) => {
  if (err) {
    throw err;
  } else {
    const end = Date.now();
    console.log(`Finial result is ${result}, with ${end - start}`);
  }
});