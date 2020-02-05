const env = process.env;
export const nodeEnv = env.NODE_ENV||'development';
export const printstars=function(msg){
	console.log("***********");
	console.log(msg);
	console.log("***********");
};
export default {
	port: env.PORT||8080
};