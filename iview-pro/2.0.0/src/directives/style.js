function unit(value) {
    return String(value).endsWith('%') ? '' : 'px';
}

export default {
    display: {
        inserted(el, binding) {
            if (binding.value) {
                el.style.display = binding.value;
            }
        },
        update(el, binding) {
            if (binding.value) {
                el.style.display = binding.value;
            }
        },
        unbind(el) {
            el.style.display = null;
        }
    },
    width: {
        inserted(el, binding) {
            if (binding.value) {
                el.style.width = binding.value + unit(binding.value);
            }
        },
        update(el, binding) {
            if (binding.value) {
                el.style.width = binding.value + unit(binding.value);
            }
        },
        unbind(el) {
            el.style.width = null;
        }
    },
    height: {
        inserted(el, binding) {
            if (binding.value) {
                el.style.height = binding.value + unit(binding.value);
            }
        },
        update(el, binding) {
            if (binding.value) {
                el.style.height = binding.value + unit(binding.value);
            }
        },
        unbind(el) {
            el.style.height = null;
        }
    },
    margin: {
        inserted(el, binding) {
            if (binding.value) {
                el.style.margin = binding.value + unit(binding.value);
            }
        },
        update(el, binding) {
            if (binding.value) {
                el.style.margin = binding.value + unit(binding.value);
            }
        },
        unbind(el) {
            el.style.margin = null;
        }
    },
    padding: {
        inserted(el, binding) {
            if (binding.value) {
                el.style.padding = binding.value + unit(binding.value);
            }
        },
        update(el, binding) {
            if (binding.value) {
                el.style.padding = binding.value + unit(binding.value);
            }
        },
        unbind(el) {
            el.style.padding = null;
        }
    },
    font: {
        inserted(el, binding) {
            if (binding && binding.value) {
                el.style.fontSize = `${binding.value}px`;
            }
        },
        update(el, binding) {
            if (binding && binding.value) {
                el.style.fontSize = `${binding.value}px`;
            }
        },
        unbind(el) {
            el.style.fontSize = null;
        }
    },
    color: {
        inserted(el, binding) {
            if (binding.value) {
                el.style.color = binding.value;
            }
        },
        update(el, binding) {
            if (binding.value) {
                el.style.color = binding.value;
            }
        },
        unbind(el) {
            el.style.color = null;
        }
    },
    bgColor: {
        inserted(el, binding) {
            if (binding.value) {
                el.style.backgroundColor = binding.value;
            }
        },
        update(el, binding) {
            if (binding.value) {
                el.style.backgroundColor = binding.value;
            }
        },
        unbind(el) {
            el.style.backgroundColor = null;
        }
    },
}