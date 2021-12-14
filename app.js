var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        items = _React$useState2[0],
        setItems = _React$useState2[1];

    React.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/comments").then(function (res) {
            return res.ok ? res.json() : [];
        }).then(function (tartalom) {
            setItems(tartalom);
        });
    }, []);

    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "div",
            { className: "row m-5 border p-5" },
            React.createElement(ListaKomponens, { elemek: items })
        )
    );
}

function ListaKomponens(_ref) {
    var elemek = _ref.elemek;

    var elementekTombje = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = elemek[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elem = _step.value;

            elementekTombje.push(React.createElement(
                "li",
                { className: "list-group-item" },
                elem.body
            ));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return React.createElement(
        "ul",
        null,
        elementekTombje
    );
}
ReactDOM.render(React.createElement(App), document.getElementById('app-container'));