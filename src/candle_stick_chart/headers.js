function csheader() {
  function cshrender(selection) {
    selection.each(function (data) {
      const interval = TIntervals[TPeriod];
      const format =
        interval == "month"
          ? d3.time.format("%b %Y")
          : d3.time.format("%b %d %Y");
      const dateprefix =
        interval == "month"
          ? "Month of "
          : interval == "week"
          ? "Week of "
          : "";
      d3.select("#infodate").text(dateprefix + format(data.date));
      d3.select("#infoopen").text("O " + data.open);
      d3.select("#infohigh").text("H " + data.close);
      d3.select("#infolow").text("L " + data.low);
      d3.select("#infoclose").text("C " + data.high);
    });
  }

  return cshrender;
}
