export const getTotal = (section) => {
  let monday = 0;
  let wednesday = 0;
  let tuesday = 0;
  let sunday = 0;
  let saturday = 0;
  let thursday = 0;
  let friday = 0;
  let total = 0;
  if (!section.length)
    return {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      total,
    };
  section.forEach((project) => {
    monday += project.monday;
    wednesday += project.wednesday;
    tuesday += project.tuesday;
    sunday += project.sunday;
    saturday += project.saturday;
    thursday += project.thursday;
    friday += project.friday;
    total += project.total;
  });
  return {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    total,
  };
};
