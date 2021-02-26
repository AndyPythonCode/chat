const get_context_data = (tag) => {
  const value = document.getElementById(tag);
  if (!value) {
    return "Notfound";
  } else {
    return JSON.parse(value.textContent);
  }
};

const context = {
  request: get_context_data("page_request"),
};

export default context;
