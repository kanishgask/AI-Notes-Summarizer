from flask import Flask, request, jsonify
from summarizer import summarize_text

app = Flask(__name__)

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text", "")

    summary = summarize_text(text)

    return jsonify({"summary": summary})

if __name__ == "__main__":
    app.run(port=8000)
